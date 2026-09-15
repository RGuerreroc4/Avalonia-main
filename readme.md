# Avalonia Fluent Design System

A design system extracted from **Avalonia UI** — the open-source, cross-platform .NET
UI framework — as forked in `RGuerreroc4/Avalonia-main`. Everything here is lifted from
that repository's real theme resources and sample applications; nothing was invented.

## Sources

| Source | What was read |
| --- | --- |
| https://github.com/RGuerreroc4/Avalonia-main (branch `main`) | Primary and only source |
| `src/Avalonia.Themes.Fluent/Accents/BaseColorsPalette.xaml` | The WinUI-derived `System*Color` ramp, light + dark |
| `src/Avalonia.Themes.Fluent/Accents/BaseResources.xaml` | Font family, base font size, corner radii, control paddings, brush aliases |
| `src/Avalonia.Themes.Fluent/Accents/FluentControlResources.xaml` | Per-control brush and metric resources (150k of XAML; read in part) |
| `src/Avalonia.Themes.Fluent/Accents/SystemAccentColors.cs` | Accent default and the HSL shade calculation |
| `src/Avalonia.Fonts.Inter/Assets/*.ttf` | The five Inter weights, copied into `assets/fonts/` |
| `samples/ControlCatalog/MainView.xaml` | The desktop shell: split drawer, page list, settings expander |
| `samples/ControlCatalog/Icons.cs` | The entire icon set — 24×24 SVG path geometry |
| `samples/ControlCatalog/Pages/NavigationPage/Pulse*.xaml` | The Pulse mobile showcase: colours, radii, control sizes |
| `samples/ControlCatalog/Assets/**` | Product mark and photography |

The repository is private; if you have access, read those paths directly — they are the
ground truth and are far richer than this summary. See `github.md` for the sync record.

## Product context

Avalonia is a framework, not an end-user product, so it presents two very different
surfaces — and this system carries both:

1. **ControlCatalog (desktop)** — the framework's own gallery app. This is the canonical
   Fluent look: system greys, a single accent, 3px corners, flat 1px borders, 14px text.
   Recreated in `ui_kits/control_catalog/`.
2. **Pulse and siblings (mobile showcases)** — sample apps added in this fork to
   demonstrate `NavigationPage`/`TabbedPage`/`DrawerPage`. They are deliberately
   opinionated: near-black canvas, a brighter #256af4 accent, 12/16px radii, 48px
   controls, full-bleed photography. Recreated in `ui_kits/pulse/`.

Sibling showcases present in the fork but **not** recreated here: ModernApp, Movies,
Restaurant, RetroGaming, Sanctuary, CurvedHeader.

## Content fundamentals

Copy in the sources is **terse, technical and second-person-free**. Framework docs and
sample annotations describe the mechanism, not the reader.

- **Voice** — declarative, third-person, present tense: *"A button gives the user a way
  to trigger an immediate action."* Not "You can use a button to…".
- **Case** — sentence case for headings, labels and button text: "Window transparency
  level", "Accept the licence", "Start Workout". Uppercase is reserved for letterspaced
  eyebrows: `WELCOME BACK`, `OR CONTINUE WITH`, `INTERMEDIATE`.
- **Length** — labels are one or two words ("Search…", "Settings", "See All"). Explanatory
  text is one sentence, wrapped at `MaxWidth="400"`.
- **Numbers are concrete** — "12 Sessions", "32 min", "450 kcal", "compiled in 4.2s". Never
  "many" or "several".
- **Placeholders end in an ellipsis character**: `Search…`. Emails show the shape:
  `name@example.com`.
- **No emoji anywhere.** Not in code, samples, docs or UI. Status is carried by the four
  status colours and by `PathIcon` glyphs.
- **Product names keep their casing**: Avalonia, ControlCatalog, NavigationPage, Fluent,
  Simple. Showcase brands are shouted with a trailing period: `PULSE.`
- **Vibe** — an engineer showing you the machine. Confident, unadorned, no marketing
  adjectives.

## Visual foundations

**Colour.** One accent (`#0078D7`) plus a neutral ramp, and that is all. The neutral ramp
is not a set of greys — it is **black and white at fixed alphas** (`Base*` = black over
light, white over dark; `Alt*` = the inverse), which is why the theme flips light↔dark by
swapping two dictionaries. Solid greys appear only in the `Chrome*` keys. Accent shades are
computed, not picked: ±HSL lightness steps of 28.5/49/74.5 down and 39/70/103 up.

**Type.** Inter at 14px is the whole system; 12px for secondary, 16–20px for headings,
26px only in the mobile showcase. Weight does the work — Light 300 for counts, Medium 500
for labels, SemiBold 600 for selection, Bold 700 for titles. Letterspacing of 1–2px on
9–10px uppercase is the one typographic flourish. Mono is Cascadia Code → Consolas → Menlo.

**Spacing.** Not on a 4px grid. Paddings are asymmetric and optically balanced —
`ButtonPadding` is `8,5,8,6`, `TextControlThemePadding` is `10,6,6,5`. Copy them exactly;
snapping to 4/8 is wrong. Layout stacks use `Spacing` of 8/12/16/20.

**Corners.** 3px on controls (Avalonia overrides WinUI's 4), 5px on overlays, 999px on
chips and switches. The mobile showcase uses 12px controls / 16px cards.

**Depth.** There is **no elevation ramp**. Cards are flat: a surface tint plus a 1px
hairline. Only genuinely floating layers (flyouts, dropdowns, menus, toasts) get a
"transient" treatment — 1px black at 14% opacity (36% in dark) plus a soft shadow.

**Borders.** 1px everywhere. A focused text input keeps its 1px border and adds a 1px
inset accent ring (no reflow), rather than a floating ring appearing. Selection is never a coloured left border — it is an
accent-tinted background fill.

**Backgrounds.** Flat colour. No gradients as decoration, no textures, no patterns,
no illustrations. Gradients appear only as **protection scrims** over photography:
`#00000000 → #33000000 @40% → #CC000000` bottom-up, so white text stays legible.

**Imagery.** Warm natural-light photography, full-bleed inside rounded containers, always
`UniformToFill`. Cool blue-grey UI, warm photos. No duotones, no grain, no b&w.

**Transparency and blur.** Used structurally, not decoratively — the alpha ramp *is* the
neutral palette. Real blur exists as a window-level option (`Blur`, `AcrylicBlur`, `Mica`),
never as a CSS effect on a card.

**Animation.** Short colour cross-fades on `background`/`border`/`foreground` at
83–250ms, `cubic-bezier(0.4, 0, 0.6, 1)`. Scrollbar thumbs scale. Nothing bounces, lifts,
or springs.

**Hover / press.** Hover adds a 10% overlay plate (or lightens the accent to Light1).
Press darkens (accent → Dark1, or a 40% plate). Nothing scales or translates on press —
this is a desktop framework, not a touch toy.

**Disabled.** Never opacity on the whole control: the fill stays, and foreground and
border switch to `BaseMediumLow` / `ChromeDisabled*`.

**Layout rules.** Fixed chrome, scrolling content. The drawer is 260px open, 52px compact.
Explanatory paragraphs cap at 400px. Content hosts scroll; headers, tab bars and drawers
do not.

## Iconography

Avalonia has **no icon font and no SVG files**. Every glyph is a path-geometry string
handed to `<PathIcon Data="…"/>` — in the catalog they live as C# consts in `Icons.cs`.
That whole set is preserved verbatim in `assets/icons/paths.js` (~50 glyphs) and rendered
by the `PathIcon` component.

- 24×24 viewBox, **solid single-path fills, no strokes** — Material-style silhouettes.
- Sizes: 20px is the theme default (`IconElementThemeHeight`), 16px in nav rows and
  inside buttons, 12–14px for inline metadata.
- Colour is set by fill, usually `--text-secondary` at rest and `--text-body` or the
  accent when active.
- **No emoji, ever.** Unicode is used as a glyph in exactly one place — `\uf8ff` and the
  letters G/f as social-login marks in the Pulse login — and `•` as a password char.
- No CDN icon library is used or needed. Do not substitute Lucide or Heroicons.

## Brand mark

The only mark in the sources is the **Avalonia application icon** (`Icon.png`, copied to
`assets/logo/`). There is **no wordmark or logotype file** — the samples pair the icon
with plain type. Set product names in Inter SemiBold beside the mark; never redraw it.

## Index

Root files: `styles.css` (the single entry point consumers link), `thumbnail.html`,
`readme.md`, `SKILL.md`, `github.md`.

**Tokens** — `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`shape.css`, `motion.css`, `semantic.css`.

**Assets** — `assets/fonts/` (Inter ×5), `assets/logo/`, `assets/icons/paths.js`,
`assets/img/pulse/`, `assets/img/photos/`.

**Components**

- `components/core/` — **Button**, **ToggleButton**, **HyperlinkButton**, **PathIcon**
- `components/forms/` — **TextBox**, **SearchBox**, **CheckBox**, **RadioButton**, **ToggleSwitch**,
  **ComboBox**, **SegmentedControl**, **Slider**
- `components/data/` — **Card**, **Expander**, **ListItem**, **TabItem**, **TreeView**,
  **ProgressBar**, **NotificationCard**

Each directory carries a `@dsCard` HTML showing all states. Every component has a
`.d.ts` props contract and a `.prompt.md` usage note.

Two components have no one-to-one control in the source and are marked as **intentional
additions**: **Card** (the samples build panels from raw `<Border>`; this wraps that
pattern) and **PathIcon** (a thin wrapper so the `Icons.cs` geometry is reusable).
**ListItem** and **TabItem** are cosmetic stand-ins for `ListBoxItem` and `TabItem`.
**SearchBox**, **SegmentedControl** and **TreeView** are navigation-panel additions
(filled search field, pill switcher, and the room/device project tree) composed in the
**Project navigator** card.

**Patterns** — `patterns.css`: author-composed utilities the design system has no
control for. `data-card-footer` seats a recessed action band at a card's bottom edge
(and drops the preceding row's hairline). `data-chip` is a compact pill — neutral by
default, with `accent`, `success`, `warning`, `critical` and `info` tones. Documented in
`patterns.card.html`. Backed by the `--surface-footer`, `--text-on-success` and
`--divider-row` tokens in `tokens/semantic.css`.

**UI kits** — `ui_kits/control_catalog/` (desktop shell + Buttons, Forms, Feedback
screens) and `ui_kits/pulse/` (login → tabbed dashboard → workout detail → profile).

**Guidelines** — `guidelines/*.card.html`: 18 specimen cards across Colors, Type,
Spacing and Brand.

## Known gaps

- **Cascadia Code** is referenced by `--font-mono` but ships no font file; the fallback
  stack renders. Upload it if you need it exact.
- `FluentControlResources.xaml` is 150 KB and was read in part — per-control brushes for
  Calendar, DataGrid, TreeView, ColorPicker, ScrollBar and the split/drop-down buttons
  were not transcribed.
- The Simple theme (`Avalonia.Themes.Simple`) is not represented.
- Five sibling mobile showcases were not recreated (see Product context).
