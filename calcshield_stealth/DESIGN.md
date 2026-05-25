---
name: CalcShield Stealth
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#dac3ad'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#a28d79'
  outline-variant: '#544433'
  surface-tint: '#ffb868'
  primary: '#ffc688'
  on-primary: '#482900'
  primary-container: '#ff9f0a'
  on-primary-container: '#673d00'
  inverse-primary: '#885200'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b6b4b7'
  tertiary: '#d2d0d2'
  on-tertiary: '#303032'
  tertiary-container: '#b6b4b6'
  on-tertiary-container: '#464648'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddbb'
  primary-fixed-dim: '#ffb868'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 94px
    fontWeight: '300'
    lineHeight: 112px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 41px
    letterSpacing: 0.37px
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.35px
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.41px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.24px
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.08px
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 13px
    letterSpacing: 0.06px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-main: 16px
  gutter-grid: 12px
  stack-gap: 8px
  section-padding: 24px
---

## Brand & Style

The design system is engineered to be indistinguishable from native iOS system utilities. It prioritizes a "stealth" aesthetic, utilizing the premium, high-fidelity finish of Apple’s internal design language to mask sensitive functionality behind a familiar, utility-first facade.

The personality is **precise, reliable, and discreet**. It employs a **Premium Minimalist** style blended with **Glassmorphism** and **Tactile** elements. The interface should feel expensive yet invisible—mimicking the physical properties of modern hardware through soft-touch matte surfaces and precise optical shadows.

**Key Principles:**
- **Native Fidelity:** Adhere strictly to iOS human interface patterns.
- **Stealth by Familiarity:** Use standard calculator and system metaphors to hide advanced security features.
- **Physicality:** Elements should feel like physical glass and aluminum buttons with realistic response.

## Colors

The palette is strictly optimized for OLED displays, utilizing a true black base to allow hardware and software to merge seamlessly.

- **Backgrounds:** Pure `#000000` for the canvas. `#1C1C1E` (Elevated) and `#2C2C2E` (Grouped) are used for container elements to create the "iOS Dark Mode" depth.
- **Action/Primary:** `#FF9F0A` (Vibrant Orange) is reserved for active states, primary calculations, and critical CTA buttons, echoing the native iOS Calculator app.
- **Typography:** Pure white (`#FFFFFF`) for primary headers, `#A2A2A2` for secondary labels and hints to maintain hierarchy without visual noise.
- **Accents:** Use system-style blurs for glassmorphic panels, typically a 70% opacity version of the secondary color with a heavy background blur.

## Typography

This design system utilizes **Inter** as the primary typeface to emulate the tight kerning and geometric clarity of SF Pro.

- **The Display Scale:** Used for the calculator result area. It features a light weight and negative letter spacing to handle large numbers gracefully.
- **The System Scale:** Headings use bold weights with positive tracking, matching the iOS "Large Title" and "Headline" specs.
- **The Functional Scale:** Body text is set at 17px for optimal readability on mobile devices. Labels and captions use smaller sizes but maintain slightly higher weights (Medium/Semibold) for legibility against dark backgrounds.

## Layout & Spacing

The layout follows a strict **8pt grid system**, mirroring the density of native mobile applications.

- **Margins:** Standard 16px lateral margins for all content containers.
- **The Grid:** For calculator layouts, a 4-column fluid grid is used with 12px gutters. This ensures buttons remain large enough for high-speed thumb interaction.
- **Safe Areas:** Adhere to iOS notch and home-indicator safe areas. Content should flow behind these areas using glassmorphism, but interaction targets must stay within the safe bounds.
- **Reflow:** On tablets, the 4-column grid transitions to a fixed-width floating panel or a sidebar configuration to maintain the "phone-app" utility feel.

## Elevation & Depth

Depth is achieved through a combination of **Tonal Layering** and **Realistic Shadows**.

1.  **Level 0 (Base):** Pure `#000000` background.
2.  **Level 1 (Surfaces):** `#1C1C1E` for cards and list groupings.
3.  **Level 2 (Interaction):** Calculator buttons use a subtle top-down gradient and a 2px inner-shadow to give a "concave" or "convex" feel.
4.  **Glassmorphism:** Overlays (Modals, Navigation Bars) use a background-blur (20px to 30px) with a semi-transparent layer of `#2C2C2E` at 80% opacity.
5.  **Shadows:** Shadows are rarely "black." Instead, they are high-blur, low-opacity (15-20%) spreads that suggest the light source is directly above the device.

## Shapes

The design system uses "Apple-style" continuous curves (superellipses). 

- **Standard Buttons:** Fully circular for numerical inputs.
- **Containers/Cards:** 16px to 20px (rounded-lg/xl) to match the outer radius of the iPhone hardware corners.
- **Inputs/Fields:** 10px corner radius for a modern, soft aesthetic.
- **Toggles:** Fully pill-shaped (`rounded-full`) for switch components.

## Components

### Buttons
- **Numerical:** Circular, background color `#333333`, text `#FFFFFF`.
- **Operators:** Circular, background color `#FF9F0A`, text `#FFFFFF`.
- **Special Function:** Circular, background color `#A2A2A2`, text `#000000`.
- **Feedback:** Upon press, buttons should reduce opacity to 70% or slightly darken.

### Glassmorphic Panels
- Used for the calculator's "History" or "Vault" transition. Apply `backdrop-filter: blur(20px)` and a 0.5px border of `#FFFFFF` at 10% opacity to define the edge.

### iOS-Style Toggles
- **Off State:** Gray track (`#39393D`) with a pure white circular thumb.
- **On State:** Green track (`#34C759`) with a pure white circular thumb.

### Input Fields
- Underlined or ghost-style inputs with no heavy borders. Use `#1C1C1E` as a subtle background fill with 10px rounded corners for search bars.

### Maps (Stealth Mode)
- Use a custom map style: Dark base (`#121212`), roads in `#2C2C2E`, and points of interest highlighted in subtle silver or primary orange. Avoid high-saturation greens or blues to maintain the "stealth" vibe.

### Lists
- Grouped inset style. Use a background of `#1C1C1E` against the `#000000` canvas. Items are separated by a 0.5px line of `#38383A` that doesn't reach the left edge (padding-left: 16px).