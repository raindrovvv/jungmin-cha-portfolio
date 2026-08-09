# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-08-08
- Primary product surfaces: portfolio landing page, product cards, workflow story, project gallery
- Evidence reviewed: `index.html`, `styles.css`, `script.js`, `img/optimized/`

## Brand
- Personality: calm, precise, curious, AI-native
- Trust signals: shipped products, working links, screenshots, verification loop
- Avoid: game-developer-only positioning, noisy decoration, unexplained jargon

## Product goals
- Goals: make the AI Builder position clear within the first viewport; move visitors from proof to project screens; explain how products are made.
- Non-goals: a dense resume, a generic agency landing page, visual effects that compete with the work.
- Success signals: visitors understand the role, open a project, or start an email conversation.

## Personas and jobs
- Primary personas: hiring managers, product teams, technical collaborators
- User jobs: quickly assess what was built, how AI was used, and whether the work is real.
- Key contexts of use: desktop review, mobile skim, portfolio link shared in an application.

## Information architecture
- Primary navigation: 작업 / 만드는 방식 / 소개
- Core routes/screens: single-page portfolio, project lightbox
- Content hierarchy: positioning → shipped products → Agentic Coding case study → method → builder profile → contact

## Design principles
- Product first: show working screens and outcomes before implementation detail.
- Quiet confidence: use whitespace, typography, and alignment before decoration.
- One accent: lime marks AI activity and action; surfaces stay neutral.
- Tradeoffs: Apple-like restraint is prioritized over maximal technical detail; dark mode remains as an optional AI-console mood.

## Visual language
- Color: Apple-inspired white/soft gray light mode with restrained lime; deep charcoal dark mode.
- Typography: system-first display stack with Korean Apple/Malgun fallback; Paperlogy for body and utility labels.
- Spacing/layout rhythm: 80–120px section rhythm, one centered 1240px content rail with responsive gutters, 16–32px component gaps.
- Shape/radius/elevation: 20px cards, pill controls, thin borders, layered low-contrast shadows.
- Motion: short hover lift and gallery transitions; honor reduced motion.
- Imagery/iconography: real product screenshots; engine marks only as supporting context.

## Components
- Existing components to reuse: hero console, project card, filter pills, workflow rows, gallery lightbox.
- New/changed components: Apple-style light presentation layer, mobile navigation drawer, runtime console, contact copy fallback, simplified workflow strip, and expandable Agentic Coding history panels inside product cards.
- Variants and states: light/dark theme, active filter, hover/focus, empty filter, gallery previous/next, collapsed/expanded project history.
- Token/component ownership: global variables in `styles.css`; copy and language state in `script.js`.

## Accessibility
- Target standard: WCAG 2.1 AA intent.
- Keyboard/focus behavior: visible focus ring, lightbox focus restore and Tab trap.
- Contrast/readability: dark olive lime in light mode; bright lime only on dark surfaces.
- Screen-reader semantics: labeled navigation, dialog, gallery buttons, live image counter.
- Reduced motion and sensory considerations: `prefers-reduced-motion` disables animation and transitions.

## Responsive behavior
- Supported breakpoints/devices: 734px mobile, 900px narrow tablet, 1068px tablet/desktop transition, 1440px large desktop intent.
- Layout adaptations: hero and featured card stack on tablet; filters and footer wrap on mobile.
- Touch/hover differences: gallery uses full-card buttons; hover lift is supplementary.

## Interaction states
- Loading: native lazy-loaded project images.
- Empty: filter empty state explains that work is being organized.
- Error: external links open in a new tab without blocking the portfolio.
- Success: gallery opens with counter and keyboard navigation; contact email can open Gmail or be copied directly.
- Disabled: no disabled primary controls.
- Offline/slow network, if applicable: card copy remains useful if an image is slow.

## Content voice
- Tone: direct, plain Korean, quietly confident.
- Terminology: prefer 제품, AI, 도구, 확인; explain specialized terms in project context.
- Microcopy rules: one idea per line; lead with outcome; avoid inflated claims.

## Implementation constraints
- Framework/styling system: static HTML/CSS/vanilla JavaScript.
- Design-token constraints: use CSS custom properties for the 1240px page rail and responsive gutters; preserve the lime AI accent.
- Performance constraints: use optimized local JPG thumbnails and lazy loading.
- Compatibility constraints: Cloudflare Pages static output; no build step required.
- Test/screenshot expectations: validate JS syntax, HTTP 200, asset paths, and browser smoke test.

## Open questions
- [ ] Confirm the final Cloudflare Pages project has the exact name `jungmin-cha-ai-builder` before production deploy.
