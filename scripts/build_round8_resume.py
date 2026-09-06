from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Cha_Jungmin_ROUND8_Sound_Designer_Resume.pdf"

FONT_PATH = Path(r"C:\Windows\Fonts\malgun.ttf")
FONT_BOLD_PATH = Path(r"C:\Windows\Fonts\malgunbd.ttf")

NAVY = colors.HexColor("#10283D")
INK = colors.HexColor("#1E2933")
MUTED = colors.HexColor("#5B6874")
LINE = colors.HexColor("#D9E1E6")
ACCENT = colors.HexColor("#C64B32")
PALE = colors.HexColor("#F3F6F7")


def p(text, style):
    return Paragraph(text, style)


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFont("Malgun", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 9.6 * mm, "CHA JUNGMIN | ROUND8 STUDIO SOUND DESIGNER")
    canvas.drawRightString(width - 18 * mm, 9.6 * mm, f"{doc.page}")
    canvas.restoreState()


def section(title, styles):
    return KeepTogether([
        Spacer(1, 4 * mm),
        p(title, styles["section"]),
        Spacer(1, 1.6 * mm),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=2.7 * mm),
    ])


def project_row(period, title, subtitle, bullets, styles):
    left = [p(period, styles["period"])]
    body = [
        p(title, styles["project_title"]),
        p(subtitle, styles["project_subtitle"]),
        Spacer(1, 1.1 * mm),
    ]
    for bullet in bullets:
        body.append(p(f'<font color="#C64B32">•</font> {bullet}', styles["bullet"]))
    table = Table([[left, body]], colWidths=[28 * mm, 136 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.4 * mm),
    ]))
    return table


def make_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("name", parent=base["Normal"], fontName="MalgunBold", fontSize=23,
                               leading=28, textColor=NAVY, spaceAfter=1.5 * mm),
        "role": ParagraphStyle("role", parent=base["Normal"], fontName="MalgunBold", fontSize=10.5,
                               leading=15, textColor=ACCENT, spaceAfter=3 * mm),
        "contact": ParagraphStyle("contact", parent=base["Normal"], fontName="Malgun", fontSize=8.6,
                                  leading=13, textColor=MUTED),
        "summary": ParagraphStyle("summary", parent=base["Normal"], fontName="Malgun", fontSize=9.25,
                                  leading=15.5, textColor=INK, spaceAfter=2 * mm),
        "section": ParagraphStyle("section", parent=base["Normal"], fontName="MalgunBold", fontSize=10.2,
                                  leading=14, textColor=NAVY),
        "project_title": ParagraphStyle("project_title", parent=base["Normal"], fontName="MalgunBold",
                                         fontSize=9.7, leading=13.5, textColor=INK),
        "project_subtitle": ParagraphStyle("project_subtitle", parent=base["Normal"], fontName="Malgun",
                                            fontSize=8.4, leading=12.2, textColor=MUTED, spaceBefore=0.4 * mm),
        "period": ParagraphStyle("period", parent=base["Normal"], fontName="MalgunBold", fontSize=8.2,
                                  leading=12.5, textColor=MUTED),
        "bullet": ParagraphStyle("bullet", parent=base["Normal"], fontName="Malgun", fontSize=8.55,
                                  leading=13.2, textColor=INK, leftIndent=0, spaceAfter=0.55 * mm),
        "skill": ParagraphStyle("skill", parent=base["Normal"], fontName="Malgun", fontSize=8.35,
                                 leading=13.1, textColor=INK),
        "label": ParagraphStyle("label", parent=base["Normal"], fontName="MalgunBold", fontSize=8.1,
                                 leading=12.5, textColor=NAVY),
        "small": ParagraphStyle("small", parent=base["Normal"], fontName="Malgun", fontSize=8.1,
                                 leading=12.2, textColor=MUTED),
    }


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Malgun", str(FONT_PATH)))
    pdfmetrics.registerFont(TTFont("MalgunBold", str(FONT_BOLD_PATH)))
    styles = make_styles()

    doc = BaseDocTemplate(
        str(OUTPUT), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm, topMargin=17 * mm, bottomMargin=20 * mm,
        title="Cha Jungmin - ROUND8 Studio Sound Designer Resume",
        author="Jungmin Cha",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=header_footer)])

    story = []
    story += [
        p("차정민", styles["name"]),
        p("GAME AUDIO DESIGNER | ROUND8 STUDIO 지원", styles["role"]),
        p("vnrs97@gmail.com  |  010-3326-4701  |  https://raindrovvv.tistory.com", styles["contact"]),
        Spacer(1, 4 * mm),
        p(
            "UE5와 Wwise 기반 프로젝트에서 전투·환경·UI 사운드를 설계하고, 엔진 연동과 디버깅까지 직접 수행해온 게임 오디오 디자이너입니다. "
            "음악 프로듀싱 7년 이상, 발매 트랙 50곡 이상의 제작 경험을 바탕으로 녹음·편집·레이어링·믹싱의 완성도를 인게임 상호작용과 공간감으로 확장해왔습니다.",
            styles["summary"],
        ),
        section("핵심 역량", styles),
    ]

    skills = [
        [p("인터랙티브 오디오", styles["label"]), p("Wwise Event / RTPC / State / Switch / Blend Container 설계, 3D Audio·Occlusion 구현", styles["skill"])],
        [p("엔진 연동", styles["label"]), p("Unreal Engine 5 C++·Blueprint·Anim Notify 연동, Physical Material 기반 발소리 분기", styles["skill"])],
        [p("사운드 제작", styles["label"]), p("SFX 제작·레이어링, 녹음·편집·믹싱·마스터링, FL Studio 7년 이상", styles["skill"])],
        [p("협업·검증", styles["label"]), p("Git 기반 협업, 에셋 네이밍 컨벤션 문서화, 플레이테스트·QA 및 기술 이슈 디버깅", styles["skill"])],
    ]
    skill_table = Table(skills, colWidths=[30 * mm, 134 * mm], hAlign="LEFT")
    skill_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), PALE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2.2 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2 * mm),
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
    ]))
    story += [skill_table, section("대표 프로젝트", styles)]
    story.append(project_row(
        "2025.05 - 12", "Guardian & Seeker | 4v1 비대칭 PvP 액션", "Greed Fennec Studio | 부팀장 · 게임 오디오 / 기술 구현",
        [
            "전투·몬스터·환경·UI 사운드 제작과 Wwise 3D Audio 구현을 담당. 전투·맵 위치에 따른 BGM State 전환 로직을 설계·적용.",
            "5종 표면(흙·돌·물·용암·금속)의 Physical Material을 Wwise Switch와 연동해 발소리 피드백을 구현.",
            "공간 차폐가 반영되지 않던 문제를 Wwise Occlusion, UE Collision·Line Trace 디버깅으로 개선해 거리·공간 인지를 명확화.",
            "G-STAR 2025 전시에서 299명 플레이어 기준 만족도 4.36/5.0을 기록. 플레이테스트와 QA를 통해 전달력과 밸런스를 검증.",
        ], styles
    ))
    story.append(project_row(
        "2025.02 - 04", "SYMBIO | TPS/FPS 액션 서바이벌", "4인 협업 | UE 5.5 · FL Studio",
        [
            "폐쇄된 연구소 환경의 긴장감을 목표로 실내 잔향을 고려한 총기 사운드, 재질 기반 발소리, 크리처 보이스를 제작·적용.",
            "Formant Modulation을 활용해 크리처 보이스의 질감을 설계하고, Rock·Ambience 기반 BGM으로 전투 톤을 구성.",
        ], styles
    ))
    story += [
        PageBreak(),
        section("프로젝트 및 협업 경험", styles),
    ]
    story.append(project_row(
        "2025.03 - 04", "조선십이기사단 | 멀티플레이 플랫폼 파이터", "6인 협업 | UE 5.5 · FL Studio",
        [
            "국악·EDM 세계관에 맞춰 전투 타격음, 발소리, 앰비언스 및 판소리·북 계열 UI 피드백을 설계·적용.",
            "PM과 기획에도 참여하고 C++ 캐릭터 스탯 컴포넌트·Blueprint UI 연동을 맡아 타 직군과의 협업 범위를 넓힘.",
        ], styles
    ))
    story.append(project_row(
        "2024.11", "Flight Record | 인터랙티브 미디어", "3인 협업 | Unity · C#",
        [
            "사용자 입력과 공간 이동에 따라 음악과 사운드가 변화하는 인터랙티브 오디오 구조를 구현.",
            "직접 제작한 앨범 음악을 연동하고, 플레이 흐름에 맞춰 볼륨 밸런스·믹싱과 오디오 전개를 조정.",
        ], styles
    ))
    story += [section("경력 및 교육", styles)]
    experience = [
        [p("2015.11 - 2023.06", styles["period"]), p("솔루엠 | 품질혁신 / 품질관리 엔지니어", styles["project_title"]), p("해외 Site 품질 관리, RMA 원인 분석, 고객·내부 부서 협의를 통한 개선대책 수립. 복잡한 문제를 원인-대안-검증 흐름으로 정리하고 조율한 7년 8개월의 실무 경험.", styles["small"])],
        [p("2024.12 - 2025.07", styles["period"]), p("KDT Unreal 기반 3D 게임 개발자 양성과정 | 팀스파르타", styles["project_title"]), p("UE 고급 기능과 C++ 기반 게임 로직 프로젝트 수행 | 우수상", styles["small"])],
        [p("2024.06 - 2024.11", styles["period"]), p("용인특례시 미래기술학교 정규과정 | 경희대학교", styles["project_title"]), p("Unity·Unreal 기반 실감 미디어 콘텐츠 제작 | 우수상", styles["small"])],
        [p("2017.03 - 2021.02", styles["period"]), p("한국기술교육대학교 | 기전융합공학 학사", styles["project_title"]), p("학점 4.02 / 4.5", styles["small"])],
    ]
    exp_table = Table(experience, colWidths=[31 * mm, 64 * mm, 69 * mm], hAlign="LEFT")
    exp_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.35, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2.3 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2.3 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.3 * mm),
    ]))
    story += [exp_table, section("게임 플레이 관점", styles)]
    story += [
        p("액션의 결과가 즉시 체감되는 사운드에 관심을 두고 플레이합니다. <b>Skul</b>에서는 스컬 교체에 따라 달라지는 전투 리듬과 분명한 공격 질감을, "
          "<b>Elden Ring 밤의 통치자</b>에서는 적의 전조음·피격음·공간감이 위험 판단을 돕는 방식을 관찰했습니다. "
          "<b>Sly Cooper</b> 시리즈에서는 잠입·점프·수집 같은 작은 행동에도 또렷한 반응을 주는 콘솔 액션의 피드백을 경험했습니다. "
          "상세 플레이타임과 코멘트는 별도 게임 플레이 이력 PDF로 제출합니다.", styles["summary"]),
        Spacer(1, 3 * mm),
        p("포트폴리오에는 프로젝트별 영상, 사운드 브레이크다운 및 구현·디버깅 사례를 별도 첨부합니다.", styles["small"]),
    ]
    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
