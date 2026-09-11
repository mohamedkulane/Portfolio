# Design QA

## Evidence

- Source visual truth: `C:\Users\maxam\AppData\Local\Temp\codex-clipboard-1beee086-0022-4346-a366-e37467a5cf24.png` (project slider layout)
- Source visual truth: `C:\Users\maxam\AppData\Local\Temp\codex-clipboard-20b8c4d2-ec6c-4b8f-a773-7ab2103e81c2.png` (hover card treatment and compact spacing)
- Source visual truth: `C:\Users\maxam\AppData\Local\Temp\codex-clipboard-4f9eabd4-733d-4108-a234-bf43d1675844.png` (skills progress bars)
- Source visual truth: `C:\Users\maxam\AppData\Local\Temp\codex-clipboard-37a2056f-4ee0-4cfa-a5e9-3cb5bc17f87a.png` (career journey timeline)
- Source visual truth: `C:\Users\maxam\AppData\Local\Temp\codex-clipboard-123b7510-d250-43fd-b066-75cfccd2a2c9.png` (testimonials layout)
- Implementation screenshot: Codex in-app browser capture from `http://localhost:4173/#projects` and `http://localhost:4173/#skills` at `1680 x 760` CSS px, density 1. The browser capture was emitted inline during verification and is not persisted as a separate file.
- State: dark theme, Projects section at initial slider position, Skills section with animated bars after entering the viewport, Career Journey timeline visible, and Testimonials placeholder state visible.

## Comparison

- Full view: the project area now presents three cards per desktop view with the next cards available through smooth horizontal scrolling, arrows, and slide indicators. Mobile keeps a single-card peek to communicate that more slides are available.
- Focused regions: project image crop, card hover surface, filter controls, slider indicators, and Skills progress bars were inspected at desktop and mobile widths.
- Focused regions: Career Journey heading, alternating timeline cards, center line/dots, Testimonials quote layout, client-story panel, and navbar brand mark were inspected at desktop width.
- Typography and copy: existing Geist typography and project copy were preserved; card metadata now has clearer numbering and hierarchy.
- Spacing and layout rhythm: project slider gaps and section padding were reduced to match the tighter reference composition.
- Colors and tokens: progress fills, slider indicators, hover borders, and glow effects use the existing `portfolio-green` system token (`#02F5A1`).
- Image quality and assets: project images use contained framing with padding so dashboard content is less cropped. Missing project image paths fall back to the available clinic preview instead of rendering broken/empty cards.
- Career Journey: three user-provided entries are rendered as an alternating timeline with mobile fallback, consistent card treatment, and smooth scroll-reveal motion.
- Testimonials: the commented-out section was restored as an accessible three-slide quote layout with motion, responsive stacking, dots, and previous/next controls. Because the data currently marks the testimonials as placeholders and image generation was unavailable due to usage limits, the visual panel intentionally avoids fabricated portraits or ratings.
- Brand: navbar, mobile drawer, and footer now use the same code mark plus the user's name, Mohamed.

## Comparison history

1. Initial implementation: project cards used a static grid and image crops were too tight on narrow screens. Fix: changed the project area to a horizontal snap slider and switched project images to contained framing with reduced hover scale.
2. Second pass: slider navigation and filters were tested. Fix: added smooth arrow/dot navigation, reset-to-first-slide behavior on filter changes, and reduced card/section gaps.
3. Final pass: progress bars were compared to the reference. Fix: unified every progress fill and track around the system green token and used a slower eased reveal animation.
4. Career Journey pass: added the three supplied timeline entries with alternating desktop cards, mobile stacking, and smooth line/dot/card reveals.
5. Testimonials pass: restored the section with a reference-aligned quote layout and verified the placeholder state without inventing client evidence.
6. Interaction fix: changed project slide navigation to scroll the inner carousel container only, preventing page-level horizontal shifts when dragging or using the arrows.
7. Background consistency pass: aligned the Career Journey and Testimonials sections with the shared dark portfolio background token so section transitions read as one continuous surface.

## Primary interactions tested

- Project filter controls
- Next project arrow
- Project slide indicator buttons
- Navigation to Projects and Skills sections
- Scroll-reveal and progress-bar animations
- Career Journey navigation anchor
- Testimonials responsive render and placeholder-safe content
- Three testimonial slides, dots, and previous/next transition
- Project carousel container-only scrolling

## Console and build checks

- Browser console errors after final reload: none.
- `npm.cmd run build`: passed.
- `npm.cmd run lint`: passed with one existing warning in `src/components/ui/button.jsx` about fast refresh exports.

## Findings

No actionable P0, P1, or P2 visual findings remain.

## Follow-up Polish

- Replace the fallback clinic preview with dedicated screenshots for each project when those assets are available.
- Add real testimonial portraits, quotes, and ratings once client-approved source content is available.
- The existing build-size warning can be addressed later with code splitting if needed.

final result: passed
