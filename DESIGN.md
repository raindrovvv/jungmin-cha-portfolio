# Design

Source of truth for the Jungmin Cha portfolio. Static files only: `index.html`, `styles.css`, `script.js`. No build step and no component library.

The theme toggle adds or removes `body.light`. `:root` is dark. `body.light` replaces the same custom properties. Do not invent a second theme class.

## Inspiration and rationale

Reference: **Linear**, in the sense used by [getdesign.md](https://getdesign.md/design-md/linear) DESIGN.md files: a product surface described as named tokens with roles, not a moodboard.

Why Linear, for an agentic product developer:

- The audience (hiring managers, product teams, technical collaborators) judges the work the way Linear's audience judges software: by hierarchy, shipped surfaces, and the absence of theater.
- Linear's system is near-black or near-white canvas, hairline borders, dense but quiet type, and one chromatic accent. That maps onto this site without copying Linear's indigo. The accent stays the existing teal / lime pair.
- Linear feature pages use asymmetric tiles. A bento of real projects fits that pattern. A fake runtime console does not.
- Motion is short and functional. Nothing breathes, spins, or counts up.

What we take from the reference: neutral canvas, one accent, hairline over glow, type that does the hierarchy, asymmetric project tiles, 120–320ms motion.

What we do not take: Linear's indigo (`#5E6AD2`), Inter / Berkeley Mono as a new font stack, or a cloned marketing page. Fonts stay the ones already loaded in `index.html` (system display, Paperlogy, Space Grotesk). The `<head>` is frozen.

Personality: calm, precise, curious. Trust comes from shipped products, working links, screenshots, and the verification loop. Not from a status widget.

## Color tokens

Names are roles. The accent is lime on dark surfaces and deep teal on light surfaces, so text stays readable. Bright lime is reserved for dark canvases (the contact band, Unreal / Unity tiles).

### Dark (`:root`)

| Token | Value | Role |
| --- | --- | --- |
| `--color-canvas` | `#101215` | Page background |
| `--color-surface` | `#17191d` | Cards and dialogs |
| `--color-surface-2` | `#1e2126` | Inset rows, secondary buttons |
| `--color-surface-3` | `#25292f` | Sunken chips |
| `--color-ink` | `#f4f1e9` | Headings and primary text |
| `--color-body` | `#c6c4be` | Body copy on dark |
| `--color-muted` | `#8a8e96` | Secondary copy |
| `--color-muted-2` | `#5e636c` | Labels, indexes |
| `--color-hairline` | `rgba(244, 241, 233, .13)` | Quiet dividers |
| `--color-hairline-strong` | `rgba(244, 241, 233, .24)` | Card and control borders |
| `--color-accent` | `#c8f169` | Lime. Links, focus, emphasis |
| `--color-accent-soft` | `rgba(200, 241, 105, .12)` | Accent wash behind a quote or active filter |
| `--color-accent-fill` | `#c8f169` | Primary button fill |
| `--color-accent-hover` | `#dbff8e` | Primary button hover |
| `--color-on-accent` | `#101215` | Text on accent fill |
| `--color-mark-start` | `#ddff80` | Brand mark gradient start |
| `--color-mark-end` | `#a9df43` | Brand mark gradient end |
| `--color-mark-shadow` | `rgba(188, 241, 78, .16)` | Brand mark shadow |
| `--color-mark-ink` | `#101215` | Text on the brand mark |
| `--color-warm` | `#ff8761` | Rare warm point. Not a second brand |
| `--color-info` | `#90bcff` | Unity tile only |
| `--color-contact-start` | `#202721` | Contact band |
| `--color-contact-end` | `#18201c` | Contact band |
| `--color-contact-ink` | `#f4f8e8` | Text on the contact band |
| `--color-contact-muted` | `rgba(244, 248, 232, .72)` | Secondary text on the contact band |

### Light (`body.light`)

| Token | Value | Role |
| --- | --- | --- |
| `--color-canvas` | `#f5f5f7` | Page background |
| `--color-surface` | `#ffffff` | Cards and panels |
| `--color-surface-2` | `#f5f5f7` | Inset rows |
| `--color-surface-3` | `#e8e8ed` | Sunken chips |
| `--color-ink` | `#1d1d1f` | Headings |
| `--color-body` | `#48484a` | Body |
| `--color-muted` | `#6e6e73` | Secondary copy |
| `--color-muted-2` | `#5f5f66` | Labels |
| `--color-hairline` | `rgba(29, 29, 31, .09)` | Quiet dividers |
| `--color-hairline-strong` | `rgba(29, 29, 31, .16)` | Card borders |
| `--color-accent` | `#0e7c72` | Teal for text, links, focus |
| `--color-accent-soft` | `rgba(31, 176, 162, .14)` | Accent wash |
| `--color-accent-fill` | `#1fb0a2` | Primary button fill |
| `--color-accent-hover` | `#15998c` | Primary button hover |
| `--color-on-accent` | `#101215` | Text on the teal button |
| `--color-mark-start` | `#57c9be` | Brand mark |
| `--color-mark-end` | `#139b90` | Brand mark |
| `--color-mark-shadow` | `rgba(31, 176, 162, .22)` | Brand mark shadow |
| `--color-mark-ink` | `#ffffff` | Text on the brand mark |

Light-mode shadows replace the dark shadows. Contact, `.visual-agent`, `.visual-unity`, and `.visual-lawgate` re-set `--color-accent` to `#c8f169` because those surfaces stay dark in both themes. The contact band also re-sets fill, hover, and on-accent so the email button stays lime with dark text.

Engine tiles (Unreal `#242932`, Unity `#1a2735`) are art frames, not theme surfaces.

## Type scale

| Token | Size | Weight | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| `--type-display` | `clamp(3.15rem, 5.2vw, 5.2rem)` | 700 | 1.04 | -0.065em | Hero title. `--font-display` |
| `--type-section` | `clamp(1.9rem, 3.2vw, 3.2rem)` | 600 | 1.05 | -0.045em | Section titles |
| `--type-statement` | `clamp(1.8rem, 3vw, 3.2rem)` | 700 | 1.14 | -0.065em | Statement |
| `--type-card-featured` | `clamp(2rem, 3vw, 2.6rem)` | 600 | 1.1 | -0.045em | LAW GATE title only |
| `--type-card` | `1.6rem` | 600 | 1.1 | -0.045em | Other project titles |
| `--type-body` | `1rem` | 400 | 1.6 | -0.01em | Body. `--font-text` |
| `--type-small` | `0.9rem` | 400 | 1.65 | 0 | Card descriptions |
| `--type-label` | `0.72rem` | 500 | 1.4 | 0.08em | Eyebrows, indexes, meta. `--font-text` |

`--font-display` is the system stack with Apple SD Gothic Neo, Noto Sans KR, and Malgun Gothic. `--font-text` is Paperlogy with the same Korean fallbacks. `--font-ui` is Space Grotesk for the brand mark and short workflow labels. Do not add font stylesheets.

Korean copy uses `word-break: keep-all`. The hero title may stay on two lines; it may wrap under 734px.

## Spacing scale

4 / 8 only. Use the token, not a nearby off-scale value.

| Token | Value |
| --- | --- |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 80px |
| `--space-10` | 112px |

`--space-section` is `--space-10`. `--space-card` is `--space-6`.

Page rail: `--page-max: 1240px`. Gutters: `--gutter: clamp(24px, 4vw, 56px)`, tightened to 16px at 734px. Header: `--header-h: 72px` (62px under 734px). Sections scroll with `scroll-margin-top` so anchors clear the sticky header.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 8px | Small icon tiles, workflow numbers |
| `--radius-md` | 12px | Menu rows, nested case cards |
| `--radius-lg` | 20px | Project cards, workflow list |
| `--radius-xl` | 24px | History dialog |
| `--radius-pill` | 999px | Buttons, filters, copy control |

## Shadow and elevation

Borders do most of the work. Shadows are low contrast and never colored glows.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--shadow-1` | `0 1px 2px rgba(0,0,0,.24)` | `0 1px 2px rgba(0,0,0,.04)` | Resting controls |
| `--shadow-2` | `0 2px 8px rgba(0,0,0,.18), 0 16px 38px rgba(0,0,0,.22)` | `0 2px 8px rgba(0,0,0,.04), 0 14px 34px rgba(0,0,0,.08)` | Cards |
| `--shadow-3` | `0 4px 12px rgba(0,0,0,.22), 0 20px 46px rgba(0,0,0,.28)` | `0 4px 12px rgba(0,0,0,.06), 0 20px 44px rgba(0,0,0,.12)` | Menus |

Dialogs may use a stronger scrim (`rgba(7, 9, 12, .76)` plus blur) because they cover the page. Cards do not blur the page behind them. The hero graph has no surface of its own.

Sticky header: hairline plus a mostly opaque canvas. Blur is allowed on the header only, as a reading aid, not as a glass card.

## Motion

| Token | Value | Use |
| --- | --- | --- |
| `--duration-fast` | 120ms | Color, border, theme, copy confirmation |
| `--duration-press` | 100ms | Pointer-down scale on a button |
| `--duration-base` | 180ms | Hover lift, menus, overlays |
| `--duration-slow` | 280ms | Scroll reveal opacity. First view only, still under 300ms |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | UI enter, exit, and hover |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | On-screen movement |
| `--ease-standard` | `var(--ease-out)` | Alias for the UI curve |

Button release uses 160ms with `--ease-out`. Press is `--duration-press` so the downbeat is faster than the release. Hover lift is at most 3px and only under `@media (hover: hover) and (pointer: fine)`. No 3D tilt, no infinite pulse, no blinking cursor. No `transition: all`, no `ease-in`, and no animation of `height`, `padding`, `top`, `left`, or `box-shadow`.

The hero graph may shift a node by at most 8px while the pointer is over it. That chase is critically damped (damping 1, response 0.3s). A drag tracks the pointer, rubber-bands past the stage edge, and springs home from the release velocity (damping 0.8, response 0.4s). Nothing idles when the pointer is gone. See Pattern: hero tool graph.

Scroll reveal: `IntersectionObserver` adds `.reveal-pending` only from JavaScript, then `.is-revealed` once. The entrance is opacity plus `translateY(8px)`. Items that enter together stagger by 50ms, capped at six steps. Elements already in view are not hidden. If `prefers-reduced-motion: reduce` matches, or `IntersectionObserver` is missing, or JavaScript fails, nothing is hidden. CSS must not set `.reveal { opacity: 0 }`.

Theme changes color and background over `--duration-fast`. The hero shader eases the same colors over 120ms. There is no transform on the theme toggle.

Filters show and hide cards immediately. The grid does not animate height.

`prefers-reduced-motion: reduce` drops movement: reveal travel, hover lift, press scale, overlay translate and scale, the graph spring, and the shader loop. Opacity and color transitions stay at `--duration-fast`. `.reveal-pending` stays fully visible. In-page anchor scrolling uses `auto`.

## Grid and bento

`#builds .project-grid` is a 12-column grid at `min-width: 1068px`, gap `--bento-gap` (`--space-5`). Reading order is DOM order. Do not use dense packing.

| Tile | Card | Span | Treatment |
| --- | --- | --- | --- |
| Featured, largest | LAW GATE | 12 | Side-by-side visual and copy. Visual min-height 420px. Title uses `--type-card-featured` |
| Medium / wide | Cerebras DocLens, Oh My Cosmos | 8 | Horizontal visual and copy |
| Standard | RUF Dance Academy Web, Quest Tower | 4 | Vertical card |
| Standard, closing pair | Unreal Agent, Unity MCP | 6 each | Vertical. Span 6 fills the last row. They are not wide tiles |

Wide means span 8. The closing pair is span 6 so the row does not end on an empty cell.

From 721px through 1067px the grid is 2 columns. LAW GATE spans both. Every other card spans one and stacks image over copy, so a half column stays readable.

At `max-width: 720px` the grid is one column. Every card spans the row.

All 7 `<article class="project-card">` elements stay in the DOM with their text, links, `data-i18n` attributes, `data-category` filters, gallery buttons, and `<details>` history. The LAW GATE project link stays `hidden` with the HTML comment `TODO(VENI): set LAW GATE URL in href and remove hidden`. `.project-link[hidden] { display: none }` stays. Print styles keep showing every card, including filtered ones, one landscape page each.

## Components

- Header with section links, language toggle (`ko` / `en`), and theme toggle.
- Hero: existing eyebrow, title, description, and two CTAs. Right side is the hero tool graph. See Pattern: hero tool graph and Hero shader.
- Project bento, filter pills, gallery lightbox, expandable Agentic history.
- Workflow rows, about, contact, footer.
- Primary contact control is an email button to `vnrs97@gmail.com`, with a copy button beside it. No other address.

## Do

- Lead with the work. Screenshots, names, and questions before decoration.
- Use one accent. Lime on dark, teal on light.
- Keep copy that already exists in `script.js` locales. Korean and English must both have any new key.
- Prefer hairline, spacing, and type size to show importance.
- Keep focus rings on `--color-accent`, 3px, offset 3px.
- Keep the print portfolio and the gallery keyboard path working.

## Don't

- Don't copy Linear's indigo or add a purple, blue, or mesh gradient.
- Don't put glassmorphism on cards or on the hero graph (translucent fill plus heavy blur plus a glowing border).
- Don't add metrics, client counts, or percentages that are not already in the copy.
- Don't animate the hero with tilt, orbiting rings, or a fake cursor.
- Don't hide content in CSS in a way that requires JavaScript to show it.
- Don't change `<head>` SEO tags, `404.html`, `robots.txt`, `sitemap.xml`, or `assets/og-image.png`.
- Don't add a library, a font, or a build step.
- Don't add decorative vertical guide lines in the hero.

## Anti-patterns: generic AI-made portfolio hero

This is the hero to refuse. It shows up when a generator has no real work to point at:

- A full-viewport purple-to-blue or violet-to-cyan mesh gradient, often with a second pink blob in the corner.
- Glassmorphism cards: white at 10–20% opacity, `backdrop-filter: blur(20px)` or more, a 1px gradient border, and a colored outer glow.
- The headline pattern "Hi, I'm {Name}", "Building the future of X", or "Crafting digital experiences that matter", with the name in gradient text.
- Floating blurred orbs behind the headline, sometimes slowly drifting.
- A fake terminal, IDE, or "agent runtime" panel. Typical contents: a green **LIVE** badge, a version line like `AGENT v0.1 · BUILD #024`, a made-up trace (`plan_problem` done, `tool_call` running, `verify_output` queued), and a log line "AI is thinking..." with a blinking cursor.
- A pulsing "Available for work" or "System online" pill that is not a real status.
- Emoji bullets, emoji skill chips, and a row of every framework logo as the main proof.
- Buzzwords with no product attached: innovative, passionate, synergy, next-gen, cutting-edge, seamless, supercharge.
- Fake stat counters: "10+ years", "50+ projects", "99% satisfaction", numbers that tick up on scroll.
- Three identical glass cards under the hero, each an icon plus a vague noun (Design / Develop / Deploy).
- Stock astronauts, humanoid robots, or a decorative 3D blob standing in for the work.
- A fake GitHub contribution graph, fake star ratings, or testimonials that were not given.

The hero on this site uses the existing sentences (`heroEyebrow`, `heroTitleOne`, `heroTitleTwo`, `heroDesc`, `heroCta`, `heroContact`) and the hero tool graph of the real projects. It does not claim a live agent, a build number, or a metric.

## Pattern: hero tool graph

The right side of the hero is an open diagram (`#heroGraph`). It is the index of the seven builds, drawn on the hero background instead of inside a widget. In both themes the container has no border, no fill, no radius, no padding, and no shadow. No blur, no mesh, no glow, no status badge. The soft accent wash behind the diagram is the hero shader on the section background, not a glow on this container.

The diagram stays inside the page container. On desktop (1068px and up) the hero grid sizes the copy column to its content and gives the remaining width to the diagram, with a short column gap so the tools sit beside the headline instead of across an empty span. The diagram spreads across that column: tool labels toward the left, project pills toward the right. The rightmost project pill meets the container's right edge — the same edge as the header content, and the mirror of the left text margin. The headline does not overlap the diagram. Below 1068px the hero stacks in one column and the diagram stays inside that column, with no horizontal overflow.

The title (`graphTitle`, "작업에 쓴 도구" / "Tools I used") stays visible as a quiet eyebrow above the diagram: muted, small, tracked, and uppercased with CSS. English picks up the case; Korean does not change. It is not a panel heading. The group's accessible name is still `aria-label` from `graphAria`.

Nodes are light objects on the canvas:

- Tool nodes are a label plus a small dot. No chip fill and no border. Hover and focus turn the label and the dot accent without changing their size.
- Project nodes are the links. A hairline border and a near-transparent fill keep the hit shape visible. The target is at least 44px tall. Hover and focus use the accent border, accent text, and accent wash.
- While a node is hot, other nodes and edges drop to 30% opacity. Lit nodes and lit edges stay fully opaque. Lit edges use the accent stroke.

Twelve nodes, no more:

- Tools, in the same order as the workflow stack: Codex, Claude, Gemini, MCP, RAG.
- Builds, in card order: LAW GATE, Cerebras DocLens, RUF Dance Academy Web, Oh My Cosmos, Quest Tower, Unreal Agent, Unity MCP.

A line is drawn only where that build's write-up names the tool.

| Tool | Builds that name it |
| --- | --- |
| Codex | LAW GATE, Unreal Agent |
| Claude | Unreal Agent |
| Gemini | none. The stack names Gemini. No build write-up does |
| MCP | Unreal Agent, Unity MCP |
| RAG | LAW GATE, Unreal Agent |

Cerebras DocLens, RUF Dance Academy Web, Oh My Cosmos, and Quest Tower stay in the diagram with no line. Their cards do not name these five tools. Do not add a line to fill the empty space.

Behavior:

- Project nodes are real links to `#project-lawgate`, `#project-cerebras`, `#project-ruf`, `#project-ohmycosmos`, `#project-questtower`, `#project-unreal`, and `#project-unity`. Click and Enter use the existing in-page scroll. A drag does not navigate.
- Hover or focus on a project highlights that node, the tools its write-up names, and the lines between them. Hover on a tool highlights the builds that name it.
- The pointer may ease a node at most 8px, and a node can be dragged. The drag stays 1:1 with the pointer, including past the edge, where it rubber-bands. On release it springs back to the layout from the pointer's velocity. Nothing moves when the pointer is gone and the spring has settled.
- `prefers-reduced-motion: reduce` snaps the static layout and does not run the loop or the drag.
- The loop stops when the diagram is off screen (`IntersectionObserver`) or `document.hidden`, and it does not run while the nodes are already at rest.
- Stage width under 380px, or whenever the columns would leave less than 48px between them: shorter labels, straight lines, no pointer nudge, and a 32ms frame gap. `touch-action: pan-y` on the stage and the nodes, so the page still scrolls vertically.
- Edges are SVG stroked with the color tokens. There is no canvas bitmap. Motion snaps to a device-pixel grid capped at 1 on narrow screens and 1.5 otherwise.
- The group `role` is `group`, with `aria-label` from `graphAria`. The visible eyebrow is `graphTitle`. Node strings use `toolCodex`, `toolClaude`, `toolGemini`, `toolMcp`, `toolRag`, and `graphLabel*` / `graphLabel*Short`. Both `locales.ko` and `locales.en` define every key.
- Without JavaScript the same project links remain a readable stack. Do not hide them in CSS.

Copy stays plain. A line exists only when the write-up names the tool. No counts, no percentages, no live state.

## Hero shader

A hand-written WebGL1 shader paints the hero background. `<canvas class="hero-shader" aria-hidden="true">` is absolutely positioned behind the copy and the tool graph, with pointer events off. No shader library. The script added for this stays under 4KB. It is a dot grid plus a grain gradient, kept quiet enough that it does not become a second graphic.

What it draws, back to front:

- The background color. Dark is flat `--color-canvas`. Light keeps the existing wash from `--color-surface` at the top to `--color-canvas` at the bottom.
- A soft radial wash of `--color-accent`, centered on the right half behind the graph. A few percent at the center, and essentially none under the title. Not a blob, not a mesh, and not a border glow.
- Faint monochrome grain. The grain pattern itself does not animate, so it does not strobe. Theme changes cross-fade the shader colors over `--duration-fast`.
- A dot grid at 22 CSS pixels. A slow low-frequency noise field changes each dot's alpha. The field drifts; it does not pulse. Peak alpha is about 13% in dark and 10% in light.

Colors are read from those custom properties and passed as uniforms. The theme toggle reads them again. Type stays on the canvas color, so contrast remains WCAG AA. The dots are a sparse tint, not a new text color.

`prefers-reduced-motion: reduce` draws one static frame and does not run the loop.

If WebGL is missing, the shader fails to compile or link, or a lost context cannot be restored, the canvas is removed. On context loss the canvas is hidden until the browser restores it, so the CSS background shows in the meantime.

Fallback, and the look before the shader starts: `.hero-section` has a static `radial-gradient` dot tile at `background-size: 22px` and a soft accent radial gradient. Light mode keeps the vertical wash. The hero is readable with or without the canvas.

Performance budget:

- Init waits for `load`, then `requestIdleCallback`, and only creates the context once the hero intersects (`IntersectionObserver`).
- The drawing buffer is the CSS size times `min(devicePixelRatio, 1)` at hero widths of 720px and below, otherwise `min(devicePixelRatio, 1.5)`, then times `0.75`.
- The loop targets about 30fps. It pauses when the hero is off screen or `document.hidden`.
- `ResizeObserver` refits the buffer. A resize while paused draws one frame.

## Quiet surface details

One faint treatment from outside studies. It uses tokens already on the page.

- Site grain. `.site-noise` is a small repeated SVG `feTurbulence` tile, desaturated, inlined as a data URI. Opacity is 5% in dark and 3.5% in light. No image file.

The anti-patterns above still apply. One accent, very low contrast. No purple, no mesh, no glass, no glow on the diagram.

## Accessibility and responsive behavior

- Target: WCAG 2.1 AA intent.
- Focus stays visible. The lightbox traps Tab and restores focus. The history dialog closes on Escape.
- Breakpoints already in the CSS: 720px bento collapse, 734px type and gutter, 900px navigation drawer, 1068px desktop bento.
- Touch targets for hero project links and filter controls stay at least 44px tall.
- `lang` on `<html>` follows the language toggle.

## Content voice

Direct, plain Korean, quietly confident. Prefer 제품, AI, 도구, 확인. One idea per line. No inflated claims.

## Implementation

- Tokens live in `styles.css` and match the names in this file.
- Copy and language state live in `script.js` (`locales.ko`, `locales.en`).
- Optimized local images, lazy loaded. Cloudflare Pages, no build.
- Open question: confirm the production Pages project name `jungmin-cha-ai-builder` before a production deploy.
