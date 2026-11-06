# Zero-Web: Design System & Brand Identity

> **Brand Identity:** Zero-Web  
> **Tagline:** Learn It. Build It. Launch It.  
> **Subheadline:** From Zero Knowledge to Your First Live Website.  
> **Design Philosophy:** Modern Developer Platform meets High-End SaaS Dashboard. Minimalist, uncluttered, hyper-legible, and high-performance.

---

## 1. Brand Aesthetics & Principles

### 1.1 Core Principles
1. **Developer First, Not Childish**: Beginners deserve professional, industry-grade interfaces. No patronizing clip-art or toy-like gamification.
2. **Clarity Over Flashiness**: Avoid excessive gradients, floating decorative 3D shapes, or laggy animations. Every visual element must serve a pedagogical purpose.
3. **High Information Hierarchy**: Use subtle 1px borders, generous padding, and crisp typography to make dense technical information effortless to scan.
4. **Seamless Dark & Light Mode**: Built from the ground up with native CSS variables for both deep obsidian dark mode and crisp paper light mode.

---

## 2. Color Palette & Tokens

### 2.1 Primary Brand & Accent Colors

| Role | Color Name | Hex Code | Tailwind Token | CSS Variable (`--color-*`) |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary** | Electric Indigo | `#6366F1` | `indigo-500` | `--brand-primary` |
| **Brand Primary Hover** | Vivid Purple | `#4F46E5` | `indigo-600` | `--brand-primary-hover` |
| **Brand Accent** | Electric Violet | `#8B5CF6` | `violet-500` | `--brand-accent` |
| **Brand Glow** | Soft Neon Indigo | `rgba(99, 102, 241, 0.15)` | — | `--brand-glow` |
| **Tech Accent (Live)** | Bright Cyan | `#06B6D4` | `cyan-500` | `--accent-cyan` |
| **Success / Verified** | Emerald Green | `#10B981` | `emerald-500` | `--status-success` |
| **Warning / Attention** | Amber Glow | `#F59E0B` | `amber-500` | `--status-warning` |
| **Error / Mistake** | Crimson Red | `#EF4444` | `red-500` | `--status-error` |

### 2.2 Neutral Scales (Dark & Light Mode)

```css
:root {
  /* LIGHT THEME (Clean Paper) */
  --bg-page: #F8FAFC;          /* slate-50 */
  --bg-surface: #FFFFFF;       /* pure white */
  --bg-subtle: #F1F5F9;        /* slate-100 */
  --border-subtle: #E2E8F0;    /* slate-200 */
  --border-strong: #CBD5E1;    /* slate-300 */
  --text-primary: #0F172A;     /* slate-900 */
  --text-secondary: #475569;   /* slate-600 */
  --text-muted: #94A3B8;       /* slate-400 */
  --code-bg: #0F172A;          /* dark code block even in light mode */
  --code-text: #E2E8F0;
}

[data-theme="dark"], .dark {
  /* DARK THEME (Deep Obsidian Space) */
  --bg-page: #0A0F1D;          /* deep navy-black */
  --bg-surface: #111827;       /* dark gray-blue */
  --bg-subtle: #1E293B;        /* slate-800 */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --text-primary: #F8FAFC;     /* slate-50 */
  --text-secondary: #94A3B8;   /* slate-400 */
  --text-muted: #64748B;       /* slate-500 */
  --code-bg: #050811;
  --code-text: #F1F5F9;
}
```

---

## 3. Typography Hierarchy

### 3.1 Typefaces
- **Primary Body & Headings**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
- **Branding & Hero Titles**: `Plus Jakarta Sans`, `Inter`, `sans-serif`
- **Code, Terminal & Shortcuts**: `JetBrains Mono`, `Fira Code`, `Consolas`, `monospace`

### 3.2 Scale & Weight Specifications

| Element | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `3.5rem` (56px) | `1.1` | 800 (ExtraBold) | `-0.03em` |
| **Heading 1 (H1)** | `2.25rem` (36px) | `1.2` | 700 (Bold) | `-0.02em` |
| **Heading 2 (H2)** | `1.75rem` (28px) | `1.3` | 700 (Bold) | `-0.015em` |
| **Heading 3 (H3)** | `1.25rem` (20px) | `1.4` | 600 (SemiBold) | `-0.01em` |
| **Body (Large)** | `1.125rem` (18px) | `1.6` | 400 (Regular) | `normal` |
| **Body (Base)** | `1.0rem` (16px) | `1.6` | 400 (Regular) | `normal` |
| **Body (Small)** | `0.875rem` (14px) | `1.5` | 400 / 500 | `normal` |
| **Caption / Badge**| `0.75rem` (12px) | `1.4` | 600 (SemiBold) | `+0.02em` |
| **Code Display** | `0.875rem` (14px) | `1.7` | 400 / 500 | `normal` |

---

## 4. Layout & Spacing Tokens

- **Border Radius**:
  - Buttons & Inputs: `0.625rem` (`rounded-lg`)
  - Cards & Content Blocks: `1.0rem` (`rounded-2xl`)
  - Modals & Feature Carousels: `1.25rem` (`rounded-3xl`)
  - Badges & Status Pills: `9999px` (`rounded-full`)
- **Container Max-Widths**:
  - Marketing / Landing: `1280px` (`max-w-7xl`)
  - Tutorial Reading Area: `840px` (optimized line length for cognitive comprehension)
  - Full-Bleed 3-Column Tutorial Viewport: `100vw` with sticky sidebars
- **Shadows**:
  - Subtle Card: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)`
  - Card Hover Elevation: `0 10px 25px -5px rgba(99, 102, 241, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`
  - Glow Accent: `0 0 20px -2px rgba(99, 102, 241, 0.4)`

---

## 5. Core UI Component Specifications

### 5.1 Buttons
- **Primary CTA**: Electric Indigo background (`bg-indigo-600`), white text, subtle hover lift (`translate-y-[-1px]`), soft focus ring.
- **Secondary / Outline**: 1px border (`border-subtle`), subtle surface background, crisp text.
- **Ghost**: Zero border, transparent background, gentle hover background tint.
- **Antigravity Action Button**: Gradient border with electric violet highlight and an Antigravity spark icon.

### 5.2 Cards
- **SaaS Feature Card**: Clean surface (`bg-surface`), 1px border (`border-subtle`), rounded-2xl, 24px padding.
- **Module Card**: Displays module number pill (e.g., `MODULE 01`), title, estimated time, lesson count, and completion progress bar.
- **Project Lab Card**: Tech stack tag row, difficulty badge, estimated hours, and a "Start Project" action.

### 5.3 Interactive Tutorial Reader (W3Schools-Style)
- **Left Sidebar**:
  - Sticky search input at top.
  - Collapsible module accordion panels.
  - Active lesson indicator with an electric indigo left border marker.
  - Status icons: Green checkmark for completed, empty circle for pending.
- **Center Instructional Column**:
  - Module breadcrumb navigation.
  - Lesson title with time-to-read and difficulty.
  - Markdown content with custom alert boxes:
    - `> [!NOTE]` Blue accent.
    - `> [!IMPORTANT]` Indigo accent.
    - `> [!WARNING]` Amber accent.
    - `> [!CAUTION]` Crimson accent.
  - **Instructional Screenshot Container**:
    - Step badge header (e.g., `STEP 3: Configure Repository Visibility`).
    - High-resolution annotated image with rounded border and subtle shadow.
    - Actionable caption explaining exactly what to click and observe.
    - Zoom modal on click for detailed inspection.
  - **Code Block**:
    - Top bar with language badge, file name (e.g., `app/page.tsx`), and one-click "Copy Code" button.
    - Line numbering with active line highlight capability.
- **Right Context Column**:
  - Scroll-spy table of contents linking to sections.
  - "Ask AI Teacher About This Step" action card.
  - Radial progress circle showing module completion.

### 5.4 AI Teacher Drawer & Modal
- Slide-over floating panel from the right edge with a floating trigger button.
- Clean chat thread with distinct User (Indigo bubble) and AI Teacher (Deep surface card with Antigravity logo) messages.
- Language switcher pill: `English` | `తెలుగు (Telugu)`.
- Drag-and-drop screenshot uploader with thumbnail preview for error diagnosis.
- Suggested prompt pills at the bottom (e.g., *"Explain this code line by line"*, *"Why am I getting 404?"*).

---

## 6. Iconography Standards

- **Icon Set**: `lucide-react`.
- **Stroke Width**: `1.75px` across all UI icons for crisp, unified rendering.
- **Standard Sizing**:
  - Micro / Inline: `14px` (`h-3.5 w-3.5`)
  - Standard Button / Menu: `18px` (`h-4.5 w-4.5` or `h-5 w-5`)
  - Feature Card Icon: `24px` (`h-6 w-6`) with a 48px rounded-xl background container.

