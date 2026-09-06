from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "차정민_Web_Portfolio_Link.pdf"
PORTFOLIO_URL = "https://jungmin-cha-portfolio.pages.dev"

FONT_REGULAR = "C:/Windows/Fonts/malgun.ttf"
FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"


def register_fonts() -> tuple[str, str]:
    regular_name = "MalgunGothic"
    bold_name = "MalgunGothicBold"

    if Path(FONT_REGULAR).exists():
        pdfmetrics.registerFont(TTFont(regular_name, FONT_REGULAR))
    else:
        regular_name = "Helvetica"

    if Path(FONT_BOLD).exists():
        pdfmetrics.registerFont(TTFont(bold_name, FONT_BOLD))
    else:
        bold_name = "Helvetica-Bold"

    return regular_name, bold_name


def draw_round_rect(c, x, y, width, height, radius, fill, stroke=None, stroke_width=1):
    c.saveState()
    c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(stroke_width)
    else:
        c.setStrokeColor(fill)
    c.roundRect(x, y, width, height, radius, fill=1, stroke=1 if stroke else 0)
    c.restoreState()


def draw_paragraph(c, text, x, y, width, style):
    paragraph = Paragraph(text, style)
    _, height = paragraph.wrap(width, 1000)
    paragraph.drawOn(c, x, y - height)
    return height


def draw_qr(c, url, x, y, size):
    widget = qr.QrCodeWidget(url)
    bounds = widget.getBounds()
    width = bounds[2] - bounds[0]
    height = bounds[3] - bounds[1]
    drawing = Drawing(size, size, transform=[size / width, 0, 0, size / height, 0, 0])
    drawing.add(widget)
    renderPDF.draw(drawing, c, x, y)


def main():
    regular_font, bold_font = register_fonts()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    page_w, page_h = A4
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("Jungmin Cha Web Portfolio Link")
    c.setAuthor("Jungmin Cha")

    bg = colors.HexColor("#101211")
    panel = colors.HexColor("#181b19")
    panel_2 = colors.HexColor("#20231f")
    line = colors.HexColor("#343a34")
    accent = colors.HexColor("#1ed760")
    text = colors.HexColor("#f2f4f0")
    muted = colors.HexColor("#b8beb7")
    soft = colors.HexColor("#8d958d")

    c.setFillColor(bg)
    c.rect(0, 0, page_w, page_h, fill=1, stroke=0)

    # Quiet grid, matching the web portfolio mood without becoming busy.
    c.setStrokeColor(colors.HexColor("#16201a"))
    c.setLineWidth(0.35)
    for x in range(0, int(page_w), 42):
        c.line(x, 0, x, page_h)
    for y in range(0, int(page_h), 42):
        c.line(0, y, page_w, y)

    margin = 22 * mm
    card_x = margin
    card_y = 38 * mm
    card_w = page_w - margin * 2
    card_h = page_h - 74 * mm
    draw_round_rect(c, card_x, card_y, card_w, card_h, 14, panel, line, 0.8)

    # Header rail.
    c.setFillColor(accent)
    c.circle(card_x + 15 * mm, card_y + card_h - 18 * mm, 2.2 * mm, fill=1, stroke=0)
    c.setFont(bold_font, 12)
    c.setFillColor(text)
    c.drawString(card_x + 22 * mm, card_y + card_h - 20 * mm, "Jungmin Cha")
    c.setFont(regular_font, 8.5)
    c.setFillColor(soft)
    c.drawRightString(card_x + card_w - 15 * mm, card_y + card_h - 19 * mm, "Game Audio · Wwise · UE5 · Music")

    left_x = card_x + 18 * mm
    top_y = card_y + card_h - 42 * mm
    right_x = card_x + card_w - 68 * mm

    c.setFont(bold_font, 28)
    c.setFillColor(text)
    c.drawString(left_x, top_y, "Web Portfolio")

    c.setFont(bold_font, 15)
    c.setFillColor(accent)
    c.drawString(left_x, top_y - 15 * mm, "게임 오디오 / Wwise / UE5 / 음악 디스코그래피")

    body_style = ParagraphStyle(
        "body",
        fontName=regular_font,
        fontSize=10.8,
        leading=17,
        textColor=muted,
        spaceAfter=0,
    )
    draw_paragraph(
        c,
        "실제 플레이 안에서 작동하는 오디오 구현 사례와 음악 작업을 함께 정리한 웹 포트폴리오입니다. "
        "Wwise·Unreal Engine 5 기반 기술 사례, SFX/BGM 작업, Music Discography를 확인할 수 있습니다.",
        left_x,
        top_y - 27 * mm,
        108 * mm,
        body_style,
    )

    link_y = card_y + 50 * mm
    link_w = 82 * mm
    qr_box = 40 * mm
    qr_x = card_x + card_w - 18 * mm - qr_box
    draw_round_rect(c, left_x, link_y, link_w, 23 * mm, 7, panel_2, line, 0.6)
    c.setFont(bold_font, 9)
    c.setFillColor(soft)
    c.drawString(left_x + 7 * mm, link_y + 14 * mm, "LIVE URL")
    c.setFont(bold_font, 12.5)
    c.setFillColor(text)
    c.drawString(left_x + 7 * mm, link_y + 7 * mm, "jungmin-cha-portfolio.pages.dev")
    c.linkURL(PORTFOLIO_URL, (left_x, link_y, left_x + link_w, link_y + 23 * mm), relative=0)

    c.setFont(regular_font, 8.8)
    c.setFillColor(soft)
    c.drawString(left_x, link_y - 8 * mm, "PDF에서 URL 또는 QR 코드를 클릭/스캔하면 웹 포트폴리오가 열립니다.")

    draw_round_rect(c, qr_x - 4 * mm, link_y - 2 * mm, qr_box + 8 * mm, qr_box + 8 * mm, 10, colors.white)
    draw_qr(c, PORTFOLIO_URL, qr_x, link_y + 2 * mm, qr_box)
    c.linkURL(PORTFOLIO_URL, (qr_x - 4 * mm, link_y - 2 * mm, qr_x + qr_box + 4 * mm, link_y + qr_box + 6 * mm), relative=0)

    badge_y = card_y + 24 * mm
    badges = ["Interactive Audio", "Technical Sound Design", "Music Production"]
    x = left_x
    c.setFont(bold_font, 8)
    for badge in badges:
        w = c.stringWidth(badge, bold_font, 8) + 10 * mm
        draw_round_rect(c, x, badge_y, w, 9 * mm, 4.5 * mm, colors.HexColor("#242824"))
        c.setFillColor(muted)
        c.drawCentredString(x + w / 2, badge_y + 3 * mm, badge)
        x += w + 4 * mm

    c.setStrokeColor(line)
    c.setLineWidth(0.7)
    c.line(card_x + 16 * mm, card_y + 17 * mm, card_x + card_w - 16 * mm, card_y + 17 * mm)
    c.setFont(regular_font, 8.5)
    c.setFillColor(soft)
    c.drawString(card_x + 16 * mm, card_y + 10 * mm, "Attachment for application materials")
    c.drawRightString(card_x + card_w - 16 * mm, card_y + 10 * mm, "jungmin-cha-portfolio.pages.dev")

    c.showPage()
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
