---
name: Kinetic Logic
colors:
  surface: '#f8f9fd'
  surface-dim: '#d8dade'
  surface-bright: '#f8f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f8'
  surface-container: '#eceef2'
  surface-container-high: '#e7e8ec'
  surface-container-highest: '#e1e2e7'
  on-surface: '#191c1f'
  on-surface-variant: '#444650'
  inverse-surface: '#2e3134'
  inverse-on-surface: '#eff1f5'
  outline: '#747781'
  outline-variant: '#c4c6d2'
  surface-tint: '#425c9c'
  primary: '#001947'
  on-primary: '#ffffff'
  primary-container: '#0b2d6b'
  on-primary-container: '#7d97db'
  inverse-primary: '#b1c5ff'
  secondary: '#555e79'
  on-secondary: '#ffffff'
  secondary-container: '#d6dfff'
  on-secondary-container: '#59627d'
  tertiary: '#351000'
  on-tertiary: '#ffffff'
  tertiary-container: '#571f00'
  on-tertiary-container: '#d7835b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001947'
  on-primary-fixed-variant: '#284483'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#bdc6e5'
  on-secondary-fixed: '#111b32'
  on-secondary-fixed-variant: '#3d4660'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#743412'
  background: '#f8f9fd'
  on-background: '#191c1f'
  surface-variant: '#e1e2e7'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  technical-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base_unit: 8px
  container_max_width: 1200px
  gutter: 24px
  margin_mobile: 16px
  margin_desktop: 48px
---

## Brand & Style
The design system is built on the philosophy of **Engineered Minimalism**. It targets a technical audience—engineers, recruiters, and collaborators—by evoking an emotional response of precision, technical competence, and clarity.

The aesthetic blends **Modern Corporate** reliability with **Technical Industrial** details. It utilizes a high-contrast foundation to ensure maximum readability, while subtle "circuit-line" accents and dot-grid backgrounds provide a thematic nod to IoT development without cluttering the interface. The visual language is intentional, avoiding decorative flourish in favor of functional structure.

## Colors
The palette is restrictive and high-contrast to emphasize "Engineered Minimalism."

*   **Primary (#0B2D6B):** Used exclusively for structural emphasis—headings, primary actions, and active states. It represents stability and professional depth.
*   **Neutral/Text (#111417):** A near-black utilized for body copy to provide better legibility than pure black while maintaining a sharp, modern look.
*   **Base (#FFFFFF):** The canvas is pure white, creating an expansive sense of whitespace and "breathing room."
*   **Hairline (#E4E6EA):** A light grey used for structural boundaries, grids, and dividers to maintain organization without heavy visual weight.

## Typography
The typographic system uses a tiered approach to distinguish between narrative content and technical data.

*   **Headings:** Space Grotesk provides a geometric, slightly futuristic feel suitable for an IoT developer. Use it for all major section titles and page headers.
*   **Body:** Inter is used for its exceptional legibility and neutral tone, ensuring long-form project descriptions are easy to digest.
*   **Technical Labels:** JetBrains Mono is used for "metadata"—tags, tech-stack badges, timestamps, and hardware specifications. This monospaced font signals a "developer-at-work" context.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Content is organized within a 12-column grid on desktop and a 4-column grid on mobile.

*   **Rhythm:** All spacing (padding, margins) must be increments of the 8px base unit. 
*   **Structural Details:** Use 1px hairline borders (#E4E6EA) to separate major sections. For background depth, implement a subtle dot-grid pattern (1px dots spaced every 24px) in the primary-accent or light-grey color at 5% opacity.
*   **Alignment:** Text and components should favor left-alignment to mimic the structure of code and technical documentation.

## Elevation & Depth
This design system avoids traditional drop shadows to maintain its "minimalist" and "flat" engineering aesthetic.

*   **Tonal Layering:** Depth is achieved through "Surface Stacking." The base is #FFFFFF. Secondary containers or cards use a subtle #F8FAFC fill or a simple 1px outline.
*   **Ghost Borders:** Instead of shadows, use low-contrast outlines (#E4E6EA) to define interactive areas.
*   **State Changes:** Use solid color shifts rather than elevation. For example, a button hover state should transition from an outline to a solid fill, or change background color, rather than "lifting" off the page.

## Shapes
Shapes are disciplined and industrial. The design system uses a **Soft-Sharp** approach:

*   **Standard Radius:** 4px to 8px. This is enough to feel modern and "designed" without losing the precision of a sharp corner.
*   **Interactive Elements:** Buttons and Input fields should strictly follow the 4px radius.
*   **Badges:** Technical badges can use a 2px radius or be completely sharp (0px) to differentiate them from interactive buttons.

## Components
*   **Buttons:** 
    *   *Primary:* Solid #0B2D6B fill, white text, 4px radius. 
    *   *Secondary:* 1px #0B2D6B border, #0B2D6B text, transparent background.
*   **Tech-Stack Badges:** Small, monospaced text (JetBrains Mono) inside a #F8FAFC container with a 1px #E4E6EA border.
*   **Cards:** Pure white background, 1px #E4E6EA border, no shadow. On hover, the border color shifts to #0B2D6B.
*   **Input Fields:** Rectangular with a 1px #E4E6EA border. On focus, the border changes to #0B2D6B with no outer glow. Use JetBrains Mono for placeholder text to emphasize the technical nature.
*   **Circuit Accents:** Use 1px lines that terminate in small 4px circles to connect related pieces of information or to act as section headers, mimicking PCB trace layouts.