---
name: Cinematic Slate & Amber Stream
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e2e2eb'
  on-surface-variant: '#d7c3ae'
  inverse-surface: '#e2e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#9f8e7a'
  outline-variant: '#524534'
  surface-tint: '#ffb955'
  primary: '#ffc880'
  on-primary: '#452b00'
  primary-container: '#f5a623'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#24f07e'
  on-tertiary: '#003918'
  tertiary-container: '#00d16b'
  on-tertiary-container: '#005326'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb955'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#62ff96'
  tertiary-fixed-dim: '#00e475'
  on-tertiary-fixed: '#00210b'
  on-tertiary-fixed-variant: '#005226'
  background: '#111319'
  on-background: '#e2e2eb'
  surface-variant: '#33343b'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an editorial, immersive, and sleek ecosystem tailored for cinephiles, television collectors, and casual binge-watchers alike. Drawing inspiration from social cataloging staples like Letterboxd and tracking hubs like TV Time, it combines dark room theater ambiance with athletic, data-dense clarity.

### Personality & Emotional Response
The interface evokes the anticipation of a darkened screening room immediately before the projector illuminates the screen. It feels authoritative, curated, frictionless, and prestigious. Rich poster art and dynamic cinematic backdrops drive the experience, while the UI recedes smoothly into the background until invoked.

### Design Movement & Aesthetic
- **Atmospheric Dark Minimalism:** Multi-layered deep slate and obsidian surfaces eliminate eye fatigue during extended late-night browsing sessions.
- **Glassmorphic Tactility:** Subtle backdrop blurs (12px to 20px) on navigation rails, dialog overlays, and media floating controls keep media context visible while preserving hierarchy.
- **Precision Accents:** Radiant amber gold (`#F5A623`) drives key call-to-actions, award indicators, and critical ratings, supported by crisp emerald and electric cyan micro-accents for telemetry, completion states, and streaming availability indicators.

## Colors

The palette establishes an authentic cinema experience through deep charcoal foundations accented by glowing amber projectors and high-definition informational indicators.

### Foundation Tiers (Canvas & Surfaces)
- **Base Canvas (`#0B0D13`):** Absolute background, optimized for OLED deep blacks and contrast.
- **Surface Layer 1 (`#12151F`):** Standard container background for cards, rows, and drawer panels.
- **Surface Layer 2 (`#181C28`):** Elevated container for popovers, interactive menus, and focused states.
- **Surface Layer 3 (`#222738`):** Hover states, input backgrounds, and segmented control wells.

### Accent & Utility Palette
- **Golden Amber (`#F5A623`):** Primary brand accent. Used for primary CTAs ("Log Film", "Add to Watchlist"), star ratings, review highlights, and active navigation nodes.
- **Electric Cyan (`#00E5FF`):** Secondary interactive tone. Used for streaming platform availability chips, TV episode tracking timelines, and playback links.
- **Emerald Pulse (`#00E676`):** Tertiary status tone. Designates completed status ("Watched"), fresh community consensus scores, and positive tracking milestones.
- **Crimson Velvet (`#FF334B`):** Destructive actions, heart/favorite toggles, and critical drop notices.

### Text & Border Semantics
- **Text High-Contrast:** `#F3F4F6` (96% white for titles, active metrics).
- **Text Medium-Contrast:** `#9CA3AF` (Muted gray for metadata, timestamps, release years).
- **Text Subtle:** `#6B7280` (Tags, inactive icons, empty states).
- **Border Subtle:** `rgba(255, 255, 255, 0.08)` (Keyline dividers and poster framing).
- **Border Highlight:** `rgba(245, 166, 35, 0.35)` (Focused card rims, active inputs).

## Typography

The typographic hierarchy couples the structural elegance of **Plus Jakarta Sans** for titles, heroic cinema banners, and showcase features, with the neutral, hyper-legible utility of **Inter** for descriptions, cast lists, rating tallies, and tabular runtimes.

### Hierarchy & Editorial Rules
- **Display & Headlines:** Set tight negative letter tracking (`-0.01em` to `-0.03em`) to mimic film title sequences. Headlines remain high-contrast (`#F3F4F6`).
- **Body & Long-form Reviews:** Inter is configured with comfortable line heights (1.6x) to allow effortless reading of extended critiques, synopsis summaries, and user commentary.
- **Badges & Metadata (`label-caps`):** Rendered in uppercase with generous tracking (`+0.06em`) for technical specifications such as "4K ULTRA HD", "HDR10", "DOLBY VISION", and parental ratings ("PG-13", "TV-MA").

## Layout & Spacing

The layout is built on a 12-column fluid grid system paired with an 8px modular spacing baseline.

### Grid & Breakpoints
- **Desktop (1200px+):** 12-column layout, 2rem gutter, up to 1440px centered maximum wrapper. Horizontal poster carousels show 6 items per viewport slice.
- **Tablet (768px – 1199px):** 8-column layout, 1.5rem gutter, 2rem outer margins. Media carousels expose 4 to 5 visible poster cards with peek-ahead margins.
- **Mobile (320px – 767px):** 4-column layout, 1rem gutter, 1rem outer canvas margin. Poster carousels use smooth horizontal snap-scroll showing 2.5 cards simultaneously.

### Spacing Philosophy
Consistent vertical pacing governs the media stream:
- **`space-xs` (4px) / `space-sm` (8px):** Tight relationships (poster tag to title, star icon to numerical score).
- **`space-md` (16px):** Standard internal container padding for cards, search input fields, and pill groupings.
- **`space-lg` (24px):** Separation between related component blocks (e.g., episode list item divider, season picker headers).
- **`space-xl` (40px):** Spacing between major editorial rows, watchlist categories, and cast carousels.

## Elevation & Depth

Depth is established through deep tinted canvas layering combined with glassmorphic luminescence rather than conventional opaque drop shadows.

### Atmospheric Surface Stack
1. **Base Floor (Z0):** Deep Charcoal Canvas (`#0B0D13`). The stage for hero backdrops and ambient light bleeds.
2. **Card Base (Z1):** Slate Surface (`#12151F`) with a continuous 1px micro-border (`rgba(255, 255, 255, 0.07)`).
3. **Elevated Elements (Z2):** Floating player bars, persistent sticky navigation headers, and context dropdowns. Utilizes backdrop-filter blur (16px) over `#181C28` with 80% opacity.
4. **Modal Panels & Fullscreen Overlays (Z3):** `#181C28` resting above a 70% opacity blackened backdrop blur (24px).

### Shadow & Glow Architecture
- **Passive Depth:** Soft, diffused foundation shadow (`0 8px 32px rgba(0, 0, 0, 0.55)`).
- **Poster Focus Glow:** Hovering or focusing a movie poster triggers a subtle directional amber illumination (`0 12px 28px -6px rgba(245, 166, 35, 0.22)`).
- **Border Light Catch:** A top-edge pseudo-gradient border simulates an overhead spotlight hitting cards: `linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)`.

## Shapes

With a roundedness factor of `2` (8px base radius), the shape geometry balances polished modern software ergonomics with cinematic visual containment.

### Corner Radii Guidelines
- **Base Components (`rounded` / 8px):** Interactive chips, action buttons, text input fields, and score pills.
- **Poster Cards & Modular Panels (`rounded-lg` / 16px):** Media artwork thumbnails, episode cards, cast portrait frames, and review cards.
- **Dialogs & Overlay Trays (`rounded-xl` / 24px):** Quick-log modals, season switcher sheets, and contextual bottom sheets on mobile.
- **Pill Full-Round (`9999px`):** Status badges (e.g., "Season Finale", "4K", "IMDb 8.4"), user avatars, and primary quick-toggles.

### Poster Geometry
Movie posters adhere to standard theatrical aspect ratios (2:3). TV episode stills and series backdrops maintain a 16:9 widescreen ratio with identical 12px to 16px corner radii and masked overflow.

## Components

### Buttons & Interactive Controls
- **Primary CTA ("Log Film", "Watch Now"):** Solid golden amber background (`#F5A623`), dark slate text (`#0B0D13`), font weight 700. Hover transitions to `#FFB800` with subtle scale transform (1.02x).
- **Secondary / Action Toggles ("Want to Watch", "Watched", "Favorite"):**
  - Inactive: Frosted slate background (`rgba(255, 255, 255, 0.05)`), border `1px solid rgba(255, 255, 255, 0.12)`, text `#F3F4F6`.
  - Active - Watched: Emerald tint (`rgba(0, 230, 118, 0.15)`), border `1px solid #00E676`, text `#00E676`.
  - Active - Favorite: Crimson tint (`rgba(255, 51, 75, 0.15)`), border `1px solid #FF334B`, text `#FF334B`.
- **Icon Actions:** 40px circular or 8px rounded squares with center-aligned iconography, providing instant micro-feedback on tap.

### Movie & Show Poster Cards
- Standard 2:3 ratio wrapper with `12px` rounded corners and `1px` subtle light border.
- Bottom overlay gradient: Dark slate fade (`linear-gradient(to top, #0B0D13 0%, transparent 60%)`) for legibility of embedded metadata.
- Top-right floating anchor: Badge pill for community rating score.
- Micro-interactions: Hover gently raises the card (translateY -4px) and reveals quick-action drawer buttons (Watchlist, Log, Like) on desktop.

### Chips & Score Pills
- **Rating Pills:** Compact 24px height, full-rounded (`9999px`), background `rgba(18, 21, 31, 0.85)`, border `1px solid rgba(255, 255, 255, 0.1)`. Houses a micro gold star icon alongside a bold fractional number (`8.7`).
- **Genre & Tag Chips:** Monochromatic pill, background `#181C28`, text `#9CA3AF`. On hover, background shifts to `#222738` with text brightening to white.

### Lists & Episode Tracking Rows
- Full-width rows with alternating or unified `#12151F` background separated by 1px dividers (`rgba(255, 255, 255, 0.05)`).
- Episode list includes thumbnail (16:9), episode index ("S02E05"), run length, title, air date, and a tactile circular checkbox for tracking completion.

### Form Inputs & Search Command Palette
- **Inputs:** Dark slate fill (`#181C28`), border `1px solid rgba(255, 255, 255, 0.1)`. Focus state features a crisp amber glow outline (`#F5A623`) with zero jump in geometry.
- **Quick-Search Modal:** Spotlight/Alfred-style glass overlay centered on the screen, showing live poster results, release years, and director credits as the user types.

### Checkboxes, Radios & Switches
- **Custom Rating Star Picker:** 5-star interactive rating system supporting half-star increments with fluid amber filling and particle micro-burst on completion.
- **Tracking Switches:** Pill-shaped sliding toggle with high-contrast emerald glow when enabled.