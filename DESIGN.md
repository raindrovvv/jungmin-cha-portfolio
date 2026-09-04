# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-05
- Primary product surfaces: Programmer portfolio (Main, Sub, Tooling, Activities, Audio, Discography, Contact)
- Evidence reviewed: `programmer/index.html`, `programmer/script.js`, `programmer/styles.css`, portfolio assets, current browser capture

## Brand
- Personality: precise, crafted, technical, quietly confident
- Trust signals: concrete implementation scope, Git history metrics, playtest evidence, working demos
- Avoid: dense dashboard chrome, unexplained jargon, decorative cards that compete with content

## Product goals
- Goals: help recruiters scan contribution scope quickly, then inspect proof and implementation depth
- Non-goals: replicate a full product dashboard or expose private repositories
- Success signals: clear project hierarchy, fast scanning, readable evidence at desktop and mobile widths

## Personas and jobs
- Primary personas: hiring managers, technical producers, gameplay/audio leads
- User jobs: understand ownership, breadth across systems, and how ideas become verified builds
- Key contexts of use: recruiter scan, portfolio review, interview preparation

## Information architecture
- Primary navigation: Main → Sub → Tooling → Activities → Game Audio → Discography → Contact
- Core routes/screens: single-page anchored sections under `/programmer/`
- Content hierarchy: section promise → evidence → implementation detail → external proof

## Design principles
- Evidence before decoration: metrics and outcomes lead each story
- Open grouping: use whitespace, dividers, and typography before nested containers
- Tradeoffs: preserve one strong boundary per story while reducing repeated card borders

## Visual language
- Color: near-black canvas, white display type, muted body copy, blue action accent, lime labels
- Typography: Paperlogy/display headings with system sans body and mono metadata
- Spacing/layout rhythm: generous section spacing, compact internal rhythm, readable line lengths
- Shape/radius/elevation: restrained 10–12px radius; low-contrast borders; minimal shadows
- Motion: subtle reveal and pointer interaction; honor reduced-motion preferences
- Imagery/iconography: project evidence and gameplay captures; no ornamental UI chrome without meaning

## Components
- Existing components to reuse: section headings, metrics, evidence lists, project map cards, media frames
- New/changed components: contribution evidence presented as an editorial split with divider-led area rows
- Variants and states: responsive single-column layout, hover/focus links, reduced-motion fallback
- Token/component ownership: `programmer/styles.css` owns layout tokens; `programmer/script.js` owns content/rendering

## Accessibility
- Target standard: WCAG 2.1 AA intent
- Keyboard/focus behavior: native anchors and visible focus states
- Contrast/readability: body text stays muted but readable; accent is reserved for labels and actions
- Screen-reader semantics: headings, landmarks, alt text, and link labels remain semantic
- Reduced motion and sensory considerations: disable pointer pet and reveal motion when requested

## Responsive behavior
- Supported breakpoints/devices: desktop, tablet, mobile; existing 720px/980px adaptations
- Layout adaptations: editorial columns collapse; area rows become one column; media remains fluid
- Touch/hover differences: pointer-following decoration hidden on coarse pointers

## Interaction states
- Loading: native image loading with stable aspect-ratio frames
- Empty: optional project imagery can omit media without breaking card structure
- Error: external links remain explicit; missing media keeps alt text
- Success: implementation links and metrics remain visible without interaction
- Disabled: no disabled primary actions
- Offline/slow network, if applicable: local assets render independently of external links

## Content voice
- Tone: direct, specific, recruiter-readable
- Terminology: explain scope in plain Korean first; keep technical names where they prove implementation
- Microcopy rules: short labels, outcome-led descriptions, no inflated claims

## Implementation constraints
- Framework/styling system: static HTML + vanilla JavaScript + CSS
- Design-token constraints: extend existing CSS variables; avoid new dependencies
- Performance constraints: lazy-load below-fold imagery and keep decorative effects light
- Compatibility constraints: modern evergreen browsers; preserve static hosting
- Test/screenshot expectations: `node --check programmer/script.js`, asset preparation, browser smoke check

## Open questions
- [ ] Which public case links should replace private repository links? / Jungmin / before publishing
