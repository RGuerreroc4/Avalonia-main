/* @ds-bundle: {"format":4,"namespace":"AvaloniaFluentDesignSystem_a08390","components":[{"name":"ICONS","sourcePath":"assets/icons/paths.js"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"HyperlinkButton","sourcePath":"components/core/HyperlinkButton.jsx"},{"name":"PathIcon","sourcePath":"components/core/PathIcon.jsx"},{"name":"ToggleButton","sourcePath":"components/core/ToggleButton.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Expander","sourcePath":"components/data/Expander.jsx"},{"name":"ListItem","sourcePath":"components/data/ListItem.jsx"},{"name":"NotificationCard","sourcePath":"components/data/NotificationCard.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"TabItem","sourcePath":"components/data/TabItem.jsx"},{"name":"CheckBox","sourcePath":"components/forms/CheckBox.jsx"},{"name":"ComboBox","sourcePath":"components/forms/ComboBox.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"TextBox","sourcePath":"components/forms/TextBox.jsx"},{"name":"ToggleSwitch","sourcePath":"components/forms/ToggleSwitch.jsx"}],"sourceHashes":{"assets/icons/paths.js":"6b12b9ac08da","components/core/Button.jsx":"e91a02b9fc05","components/core/HyperlinkButton.jsx":"44944328aa7a","components/core/PathIcon.jsx":"f05292c1fbe9","components/core/ToggleButton.jsx":"a5e627aac6c1","components/data/Card.jsx":"2f106136c962","components/data/Expander.jsx":"ffefb6bffdce","components/data/ListItem.jsx":"58f1a72082a6","components/data/NotificationCard.jsx":"dd2c84e5095a","components/data/ProgressBar.jsx":"5445723a0f42","components/data/TabItem.jsx":"954909eb73da","components/forms/CheckBox.jsx":"449450172463","components/forms/ComboBox.jsx":"29fdb1668b2f","components/forms/RadioButton.jsx":"d16dde05d6c0","components/forms/Slider.jsx":"43a1d1807ec9","components/forms/TextBox.jsx":"15f7ab8db704","components/forms/ToggleSwitch.jsx":"2e101c4a7ed9","ui_kits/control_catalog/ButtonsScreen.jsx":"8adbfef8233f","ui_kits/control_catalog/CatalogShell.jsx":"e930fb06d8bd","ui_kits/control_catalog/FeedbackScreen.jsx":"e05aa6fa6157","ui_kits/control_catalog/FormsScreen.jsx":"8ffa70414dd4","ui_kits/pulse/PulseDetail.jsx":"ca73f3ac6772","ui_kits/pulse/PulseHome.jsx":"795968fd6835","ui_kits/pulse/PulseLogin.jsx":"d34251273ddd","ui_kits/pulse/PulseProfile.jsx":"c9a82bba4e98","ui_kits/pulse/PulseShell.jsx":"4f3eb2c33315"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AvaloniaFluentDesignSystem_a08390 = window.AvaloniaFluentDesignSystem_a08390 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/paths.js
try { (() => {
/* Icon geometry lifted verbatim from samples/ControlCatalog/Icons.cs — Avalonia
   has no icon font; every glyph is 24x24 SVG path data passed to <PathIcon/>. */
const ICONS = {
  Layers: "M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8",
  Keyboard: "M19,10H17V8H19M19,13H17V11H19M16,10H14V8H16M16,13H14V11H16M16,17H8V15H16M7,10H5V8H7M7,13H5V11H7M8,11H10V13H8M8,8H10V10H8M11,11H13V13H11M11,8H13V10H11M20,5H4C2.89,5 2,5.89 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7C22,5.89 21.1,5 20,5Z",
  Sparkle: "M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9",
  TextInput: "M20,21H4V3H20V21M6,9H14V7H6V9M6,13H18V11H6V13M6,17H14V15H6V17Z",
  Lightning: "M11,21H7L13,3H17L14,10H20L11,21Z",
  Calendar: "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M9,15H7V13H9V15M13,15H11V13H13V15M17,15H15V13H17V15M9,11H7V9H9V11M13,11H11V9H13V11M17,11H15V9H17V11Z",
  Terminal: "M20,19V7H4V19H20M20,3A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5C2,3.89 2.9,3 4,3H20M13,17V15H18V17H13M9.58,13L5.57,9H8.4L11.7,12.3C12.09,12.69 12.09,13.33 11.7,13.72L8.42,17H5.59L9.58,13Z",
  Slides: "M2,6H6V18H2V6M7,6H17V18H7V6M18,6H22V18H18V6Z",
  Checkbox: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8",
  Clipboard: "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3",
  Palette: "M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12Z",
  Dropdown: "M7,10L12,15L17,10H7Z",
  Document: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z",
  Menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  Cursor: "M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.39,12.92 18.83,13.03L14.83,13.78L17,18.5C17.24,19 17,19.59 16.5,19.83L13.64,21.97Z",
  Brush: "M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z",
  Grid: "M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14Z",
  Shield: "M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z",
  Clock: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",
  Dialog: "M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2Z",
  DragDrop: "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z",
  Drawer: "M3,2H21A1,1 0 0,1 22,3V21A1,1 0 0,1 21,22H3A1,1 0 0,1 2,21V3A1,1 0 0,1 3,2M10,4V20H20V4H10M4,4V20H8V4H4Z",
  Expand: "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z",
  Flyout: "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M7,9H10V7H7V9M7,13H17V11H7V13M7,17H14V15H7V17Z",
  Target: "M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z",
  Image: "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",
  Tag: "M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.95 21.41,11.58Z",
  List: "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z",
  Bell: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",
  Cube: "M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z",
  Dots: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",
  Info: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  Radio: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z",
  Refresh: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",
  Layout: "M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,3V21H21V3",
  Split: "M18,4H6C4.89,4 4,4.89 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4M18,6V18H13V6H18Z",
  Tab: "M21,3H3C1.89,3 1,3.89 1,5V19A2,2 0 0,0 3,21H21C22.1,21 23,20.1 23,19V5C23,3.89 22.1,3 21,3M21,19H3V5H13V9H21V19Z",
  Theme: "M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z",
  Toggle: "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z",
  Tooltip: "M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M11,15H13V13H11V15M11,11H13V5H11V11Z",
  Tree: "M15,20A1,1 0 0,0 16,19V4H8V19A1,1 0 0,0 9,20H2V22H22V20H15Z",
  Puzzle: "M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5.04,10.8 6.2,11.96 6.2,13.5C6.2,15.04 5.04,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,18.96 8.96,17.8 10.5,17.8C12.04,17.8 13.2,18.96 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z",
  Window: "M4,4H20V20H4V4M6,8V18H18V8H6Z",
  Monitor: "M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z",
  Navigation: "M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z",
  HorizontalDots: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z",
  Tune: "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z",
  Search: "M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z",
  Play: "M8 5v14l11-7z",
  Bolt: "M7 2v11h3v9l7-12h-4l4-8z",
  Flame: "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z",
  Chevron: "M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z"
};
Object.assign(__ds_scope, { ICONS, __ds_default_assets_icons_paths_j5194i: ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/paths.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fluent Button. ButtonPadding 8,5,8,6 · ControlCornerRadius 4 ·
   ButtonBorderThemeThickness 1 · standard fill = SystemControlBackgroundBaseLowBrush,
   accent fill = SystemAccentColor with Light1 hover / Dark1 pressed. */
const variants = {
  standard: {
    background: 'var(--surface-control)',
    color: 'var(--text-body)',
    borderColor: 'transparent',
    hover: {
      background: 'var(--surface-control-hover)'
    },
    active: {
      background: 'var(--surface-control-pressed)'
    }
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)',
    borderColor: 'transparent',
    hover: {
      background: 'var(--surface-accent-hover)'
    },
    active: {
      background: 'var(--surface-accent-pressed)'
    }
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--border-control)',
    hover: {
      background: 'var(--surface-control-hover)',
      borderColorHover: 'var(--border-control-hover)'
    },
    active: {
      background: 'var(--surface-control-pressed)'
    }
  },
  transparent: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'transparent',
    hover: {
      background: 'var(--surface-control-hover)'
    },
    active: {
      background: 'var(--surface-control-pressed)'
    }
  }
};
function Button({
  variant = 'standard',
  disabled,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.standard;
  const state = disabled ? {} : active ? v.active : hover ? v.hover : {};
  const {
    borderColorHover,
    ...stateStyle
  } = state;
  const borderColor = disabled ? 'transparent' : borderColorHover || v.borderColor;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      minWidth: 'var(--control-min-width)',
      height: 'var(--control-height)',
      boxSizing: 'border-box',
      padding: 'var(--padding-button)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-12)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-width) solid ' + borderColor,
      background: disabled ? 'var(--surface-control-disabled)' : v.background,
      color: disabled ? 'var(--text-disabled)' : v.color,
      cursor: disabled ? 'default' : 'pointer',
      transition: 'var(--transition-control)',
      ...stateStyle,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/HyperlinkButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* HyperlinkButton — accent-coloured underlined text, near-invisible #09000000 hover
   plate, Dark1 accent on press, #681DA8 once visited. */
function HyperlinkButton({
  visited,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const color = disabled ? 'var(--text-disabled)' : visited ? 'var(--text-link-visited)' : active ? 'var(--text-link-pressed)' : 'var(--text-link)';
  return /*#__PURE__*/React.createElement("a", _extends({
    role: "button",
    tabIndex: disabled ? -1 : 0,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: 'var(--padding-button)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-12)',
      borderRadius: 'var(--radius-control)',
      textDecoration: 'underline',
      color,
      background: hover && !disabled ? active ? '#06000000' : '#09000000' : 'transparent',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { HyperlinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HyperlinkButton.jsx", error: String((e && e.message) || e) }); }

// components/core/PathIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Avalonia renders all iconography as <PathIcon Data="..."/> — raw SVG path
   geometry (24x24 viewBox, Material-style) declared in C# consts. See
   assets/icons/paths.js for the catalog lifted from ControlCatalog/Icons.cs. */
function PathIcon({
  data,
  size = 20,
  color = 'var(--text-body)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: data,
    fill: color
  }));
}
Object.assign(__ds_scope, { PathIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PathIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/ToggleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ToggleButton — same geometry as Button; checked state swaps to the accent
   fill (ToggleButtonBackgroundChecked = SystemControlHighlightAccentBrush). */
function ToggleButton({
  checked,
  onChange,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = disabled ? 'var(--surface-control-disabled)' : checked ? hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)' : hover ? 'var(--surface-control-hover)' : 'var(--surface-control)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      minWidth: 'var(--control-min-width)',
      height: 'var(--control-height)',
      boxSizing: 'border-box',
      padding: 'var(--padding-button)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-12)',
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-width) solid transparent',
      background: bg,
      color: disabled ? 'var(--text-disabled)' : checked ? 'var(--text-on-accent)' : 'var(--text-body)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ToggleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ToggleButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Card — Avalonia has no Card control; this is the Border pattern the samples
   use: a surface with ControlCornerRadius (or the Pulse radius). Default is a
   frosted glass panel: #fff at 15% over a 60px background blur, no border. */
function Card({
  padding = 'var(--space-16)',
  radius = 'var(--radius-card)',
  surface = 'rgba(255,255,255,0.15)',
  bordered = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding,
      borderRadius: radius,
      background: surface,
      backdropFilter: 'blur(60px)',
      WebkitBackdropFilter: 'blur(60px)',
      border: bordered ? 'var(--border-width) solid var(--border-hairline)' : 0,
      fontFamily: 'var(--font-core)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Expander.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Expander — header plate + chevron, content on a chrome-medium-low surface with
   a base-low hairline. ExpandDirection="Up" is used for the settings drawer footer. */
function Expander({
  header,
  expanded,
  onToggle,
  direction = 'down',
  children,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const open = expanded ?? internal;
  const toggle = () => onToggle ? onToggle(!open) : setInternal(!open);
  const content = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12)',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderTop: direction === 'down' ? 0 : undefined,
      borderBottom: direction === 'up' ? 0 : undefined,
      fontSize: 'var(--font-size-14)',
      color: 'var(--text-body)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, rest), open && direction === 'up' && content, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-12)',
      minHeight: 'var(--control-min-height)',
      padding: '10px var(--space-12)',
      textAlign: 'left',
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-width) solid var(--border-hairline)',
      background: hover ? 'var(--surface-control-hover)' : 'var(--alt-medium-high)',
      color: 'var(--text-body)',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", null, header), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14",
    style: {
      transform: 'rotate(' + (open ? direction === 'up' ? -90 : 90 : (direction === 'up' ? -90 : 90) * (open ? 1 : 0)) + 'deg)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z",
    fill: "currentColor"
  }))), open && direction === 'down' && content);
}
Object.assign(__ds_scope, { Expander });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Expander.jsx", error: String((e && e.message) || e) }); }

// components/data/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ListBoxItem — transparent by default, list-low hover, list-medium press,
   accent-tinted selection (SystemControlHighlightListAccentLowBrush). */
function ListItem({
  selected,
  icon,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "option",
    "aria-selected": !!selected,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      minHeight: 'var(--menu-item-min-height)',
      padding: 'var(--padding-combobox-item)',
      borderRadius: 'var(--radius-control)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--text-body)',
      background: selected ? 'var(--surface-list-selected)' : hover ? 'var(--surface-list-hover)' : 'transparent',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 20,
      flex: '0 0 auto'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, children));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/data/NotificationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* NotificationCard — white card with a coloured status bar. Colours are verbatim
   from FluentControlResources.xaml: Information #0078D4, Success #7ED321,
   Warning #F57D1B, Error #F03916. */
const STATUS = {
  information: 'var(--status-info)',
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  error: 'var(--status-error)'
};
function NotificationCard({
  type = 'information',
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      minWidth: 280,
      maxWidth: 420,
      overflow: 'hidden',
      borderRadius: 'var(--radius-overlay)',
      background: 'var(--surface-page)',
      border: 'var(--border-width) solid var(--border-transient)',
      boxShadow: 'var(--shadow-flyout)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      flex: '0 0 auto',
      background: STATUS[type]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--padding-flyout-content)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--font-size-14)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-body)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      lineHeight: 'var(--line-height-normal)',
      color: 'var(--text-secondary)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      alignSelf: 'flex-start',
      margin: 'var(--space-8)',
      padding: 'var(--space-4)',
      border: 0,
      background: 'transparent',
      color: 'var(--text-secondary)',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "12",
    height: "12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fill: "currentColor"
  }))));
}
Object.assign(__ds_scope, { NotificationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/NotificationCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ProgressBar — 4px min height (ProgressBarThemeMinHeight), zero border,
   accent indicator over a base-low track. */
function ProgressBar({
  value = 0,
  indeterminate,
  showText,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : value,
    style: {
      position: 'relative',
      overflow: 'hidden',
      height: 'var(--progress-height)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-control)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: indeterminate ? '35%' : Math.max(0, Math.min(100, value)) + '%',
      background: 'var(--surface-accent)',
      borderRadius: 'var(--radius-pill)',
      animation: indeterminate ? 'av-indeterminate 1.6s var(--ease-standard) infinite' : 'none',
      transition: indeterminate ? 'none' : 'width var(--duration-normal) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes av-indeterminate{0%{transform:translateX(-110%)}100%{transform:translateX(310%)}}')), showText && !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-secondary)'
    }
  }, Math.round(value), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/TabItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TabItem — text tab; selected state is accent text with a 2px accent underline
   (TabStrip in the catalog uses a 20px header font size, 10px strip padding). */
function TabItem({
  selected,
  icon,
  children,
  onClick,
  orientation = 'horizontal',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const under = orientation === 'horizontal' ? {
    borderBottom: '2px solid ' + (selected ? 'var(--surface-accent)' : 'transparent')
  } : {
    borderLeft: '2px solid ' + (selected ? 'var(--surface-accent)' : 'transparent')
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": !!selected,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '8px var(--space-12)',
      border: 0,
      background: hover && !selected ? 'var(--surface-list-hover)' : 'transparent',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      fontWeight: selected ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
      color: selected ? 'var(--text-body)' : 'var(--text-secondary)',
      transition: 'var(--transition-control)',
      ...under,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { TabItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TabItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/CheckBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CheckBox — 20px box, 1px base-medium stroke unchecked, accent fill checked,
   white glyph. Indeterminate draws an accent-filled box with a dash. */
function CheckBox({
  checked,
  indeterminate,
  onChange,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = checked || indeterminate;
  const fill = disabled ? on ? 'var(--surface-control-disabled)' : 'transparent' : on ? hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)' : 'transparent';
  const stroke = disabled ? 'var(--text-disabled)' : on ? 'transparent' : hover ? 'var(--border-control-hover)' : 'var(--border-control)';
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-control)',
      background: fill,
      border: 'var(--border-width) solid ' + stroke,
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      background: 'var(--text-on-accent)'
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    fill: "var(--text-on-accent)"
  })) : null), children);
}
Object.assign(__ds_scope, { CheckBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CheckBox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ComboBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ComboBox — 32px closed control with a chevron; the dropdown is a transient
   surface (5px OverlayCornerRadius, 1px transient border, 4px vertical margin).
   ComboBoxItemThemePadding 11,5,11,7. */
function ComboBox({
  items = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const label = items.find(i => (i.value ?? i) === value);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      fontFamily: 'var(--font-core)',
      minWidth: 'var(--control-min-width)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      minHeight: 'var(--control-height)',
      height: 'var(--control-height)',
      boxSizing: 'border-box',
      padding: 'var(--padding-text-control)',
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-width) solid ' + (disabled ? 'var(--border-disabled)' : open ? 'var(--border-focus)' : hover ? 'var(--border-control-hover)' : 'var(--border-control)'),
      background: disabled ? 'var(--surface-control-disabled)' : hover ? 'var(--surface-input-hover)' : 'var(--surface-input)',
      color: disabled ? 'var(--text-disabled)' : label ? 'var(--text-body)' : 'var(--text-placeholder)',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14)',
      textAlign: 'left',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label ? label.label ?? label : placeholder), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "14",
    height: "14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7,10L12,15L17,10H7Z",
    fill: "currentColor"
  }))), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      zIndex: 20,
      left: 0,
      right: 0,
      marginTop: 2,
      padding: '4px 0',
      borderRadius: 'var(--radius-overlay)',
      border: 'var(--border-width) solid var(--border-transient)',
      background: 'var(--surface-transient)',
      boxShadow: 'var(--shadow-flyout)'
    }
  }, items.map((it, i) => {
    const val = it.value ?? it;
    const selected = val === value;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      role: "option",
      "aria-selected": selected,
      onClick: () => {
        onChange && onChange(val);
        setOpen(false);
      },
      onMouseEnter: e => {
        if (!selected) e.currentTarget.style.background = 'var(--surface-list-hover)';
      },
      onMouseLeave: e => {
        if (!selected) e.currentTarget.style.background = 'transparent';
      },
      style: {
        padding: 'var(--padding-combobox-item)',
        fontSize: 'var(--font-size-14)',
        color: 'var(--text-body)',
        background: selected ? 'var(--surface-list-selected)' : 'transparent'
      }
    }, it.label ?? it);
  })));
}
Object.assign(__ds_scope, { ComboBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ComboBox.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* RadioButton — 20px ellipse, 1px stroke; checked draws an accent ring with a
   white 8px inner glyph (RadioButtonCheckGlyphFill = ChromeWhite). */
function RadioButton({
  checked,
  onChange,
  disabled,
  name,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const stroke = disabled ? 'var(--text-disabled)' : checked ? hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)' : hover ? 'var(--border-control-hover)' : 'var(--border-control)';
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: 'var(--border-width) solid ' + stroke,
      background: checked && !disabled ? 'var(--surface-accent)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--text-on-accent)'
    }
  })), children);
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Slider — 2px track (SliderTrackThemeHeight), accent-filled left half, round
   accent thumb. Hover lightens the thumb (Light1), press darkens it (Dark1). */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  showValue,
  style,
  ...rest
}) {
  const pct = max === min ? 0 : (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      flex: 1,
      appearance: 'none',
      WebkitAppearance: 'none',
      height: 20,
      background: 'transparent',
      backgroundImage: 'linear-gradient(to right, ' + (disabled ? 'var(--chrome-disabled-high)' : 'var(--surface-accent)') + ' 0 ' + pct + '%, var(--text-tertiary) ' + pct + '% 100%)',
      backgroundSize: '100% var(--slider-track-height)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      cursor: disabled ? 'default' : 'pointer'
    }
  }, rest)), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-secondary)',
      minWidth: 28,
      textAlign: 'right'
    }
  }, value), /*#__PURE__*/React.createElement("style", null, 'input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--surface-accent);border:0}input[type=range]:hover::-webkit-slider-thumb{background:var(--surface-accent-hover)}input[type=range]:active::-webkit-slider-thumb{background:var(--surface-accent-pressed)}input[type=range]:disabled::-webkit-slider-thumb{background:var(--chrome-disabled-high)}input[type=range]::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:50%;background:var(--surface-accent)}'));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TextBox — TextControlThemePadding 10,6,6,5 · min height 32 · 1px border that
   gains a 1px inset accent ring on focus (no layout shift). */
function TextBox({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  innerLeft,
  innerRight,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const border = disabled ? 'var(--border-disabled)' : error ? 'var(--text-error)' : focus ? 'var(--border-focus)' : hover ? 'var(--border-control-hover)' : 'var(--border-control)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      minHeight: 'var(--control-height)',
      height: 'var(--control-height)',
      boxSizing: 'border-box',
      minWidth: 'var(--control-min-width)',
      padding: 'var(--padding-text-control)',
      borderRadius: 'var(--radius-control)',
      border: 'var(--border-width) solid ' + border,
      boxShadow: focus ? 'inset 0 0 0 1px var(--border-focus)' : 'none',
      background: disabled ? 'var(--surface-control-disabled)' : focus ? 'var(--surface-input-focus)' : hover ? 'var(--surface-input-hover)' : 'var(--surface-input)',
      transition: 'var(--transition-control)'
    }
  }, innerLeft, /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--font-size-14)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, rest)), innerRight), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextBox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ToggleSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ToggleSwitch — pill track with a knob; on-state track fills with the accent,
   knob is ChromeWhite. Off track is a 1px base-medium stroke over transparent. */
function ToggleSwitch({
  checked,
  onChange,
  disabled,
  onContent = 'On',
  offContent = 'Off',
  showContent = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2px',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      background: disabled ? 'var(--surface-control-disabled)' : checked ? hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)' : hover ? 'var(--surface-control-hover)' : 'transparent',
      border: 'var(--border-width) solid ' + (disabled ? 'var(--border-disabled)' : checked ? 'transparent' : 'var(--border-control)'),
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: disabled ? 'var(--text-disabled)' : checked ? 'var(--text-on-accent)' : 'var(--text-body)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  })), showContent && /*#__PURE__*/React.createElement("span", null, checked ? onContent : offContent));
}
Object.assign(__ds_scope, { ToggleSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ToggleSwitch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/control_catalog/ButtonsScreen.jsx
try { (() => {
const {
  Button,
  ToggleButton,
  HyperlinkButton,
  Card,
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
function Group({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-16)',
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, title), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center'
    }
  }, children));
}
function ButtonsScreen() {
  const I = window.CATALOG_ICONS;
  const [bold, setBold] = React.useState(true);
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0,
      color: 'var(--text-secondary)',
      maxWidth: 400
    }
  }, "A button gives the user a way to trigger an immediate action."), /*#__PURE__*/React.createElement(Group, {
    title: "Button"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => setCount(c => c + 1)
  }, "Clicked ", count, " times"), /*#__PURE__*/React.createElement(Button, null, "Standard"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Outline"), /*#__PURE__*/React.createElement(Button, {
    variant: "transparent"
  }, "Transparent"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(PathIcon, {
      data: I.Refresh,
      size: 16
    })
  }, "With icon")), /*#__PURE__*/React.createElement(Group, {
    title: "ToggleButton"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    checked: bold,
    onChange: setBold
  }, "Bold"), /*#__PURE__*/React.createElement(ToggleButton, null, "Italic"), /*#__PURE__*/React.createElement(ToggleButton, {
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement(Group, {
    title: "HyperlinkButton"
  }, /*#__PURE__*/React.createElement(HyperlinkButton, {
    href: "#"
  }, "avaloniaui.net"), /*#__PURE__*/React.createElement(HyperlinkButton, {
    visited: true
  }, "Release notes"), /*#__PURE__*/React.createElement(HyperlinkButton, {
    disabled: true
  }, "Disabled")));
}
Object.assign(window, {
  ButtonsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/control_catalog/ButtonsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/control_catalog/CatalogShell.jsx
try { (() => {
const {
  Button,
  TextBox,
  ComboBox,
  Expander,
  ListItem,
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
const I = window.CATALOG_ICONS;
function DrawerHeader({
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/avalonia-icon.png",
    alt: "Avalonia",
    style: {
      maxHeight: compact ? 32 : 120,
      width: 'auto'
    }
  })), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 8px 4px 4px'
    }
  }, /*#__PURE__*/React.createElement(TextBox, {
    placeholder: "Search\u2026",
    innerLeft: /*#__PURE__*/React.createElement(PathIcon, {
      data: I.Search,
      size: 14,
      color: "var(--text-secondary)"
    })
  })));
}
function DrawerFooter() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Expander, {
    header: "Settings",
    direction: "up",
    expanded: open,
    onToggle: setOpen,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 152
    }
  }, /*#__PURE__*/React.createElement(ComboBox, {
    items: ['Full', 'BorderOnly', 'None'],
    value: "Full"
  }), /*#__PURE__*/React.createElement(ComboBox, {
    items: ['Default', 'Light', 'Dark'],
    value: "Default"
  }), /*#__PURE__*/React.createElement(ComboBox, {
    items: ['Fluent', 'Simple'],
    value: "Fluent"
  }), /*#__PURE__*/React.createElement(ComboBox, {
    items: ['None', 'Transparent', 'Blur', 'AcrylicBlur', 'Mica'],
    value: "None"
  }))));
}
function CatalogShell({
  pages,
  active,
  onSelect,
  children
}) {
  const [compact, setCompact] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--font-size-14)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: compact ? 'var(--drawer-width-compact)' : 'var(--drawer-width)',
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--border-hairline)',
      background: 'var(--surface-subtle)',
      transition: 'width var(--duration-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    compact: compact
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '10px 6px'
    }
  }, pages.map(p => /*#__PURE__*/React.createElement(ListItem, {
    key: p.id,
    selected: p.id === active,
    onClick: () => onSelect(p.id),
    icon: /*#__PURE__*/React.createElement(PathIcon, {
      data: p.icon,
      size: 16,
      color: p.id === active ? 'var(--text-body)' : 'var(--text-secondary)'
    })
  }, compact ? '' : p.title))), /*#__PURE__*/React.createElement(DrawerFooter, null)), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "transparent",
    onClick: () => setCompact(c => !c),
    style: {
      minWidth: 0,
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: I.Menu,
    size: 16,
    color: "var(--text-secondary)"
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, (pages.find(p => p.id === active) || {}).title)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 20
    }
  }, children)));
}
Object.assign(window, {
  CatalogShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/control_catalog/CatalogShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/control_catalog/FeedbackScreen.jsx
try { (() => {
const {
  Button,
  Card,
  ProgressBar,
  NotificationCard,
  TabItem,
  ListItem,
  Expander,
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
function FeedbackScreen() {
  const I = window.CATALOG_ICONS;
  const [tab, setTab] = React.useState(0);
  const [toasts, setToasts] = React.useState([{
    id: 1,
    type: 'success',
    title: 'Build succeeded',
    body: 'ControlCatalog.Desktop compiled in 4.2s.'
  }]);
  const [pct, setPct] = React.useState(38);
  const push = type => setToasts(t => [...t, {
    id: Date.now(),
    type,
    title: type === 'error' ? 'XAML compiler error' : type === 'warning' ? 'Deprecated API' : 'Attached to process',
    body: type === 'error' ? "Unknown property 'Foo' on Border." : type === 'warning' ? 'IStyleable is obsolete.' : 'Debugger attached to Avalonia.Desktop.'
  }]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-hairline)',
      marginBottom: 16
    }
  }, ['Progress', 'Lists', 'Disclosure'].map((t, i) => /*#__PURE__*/React.createElement(TabItem, {
    key: t,
    selected: tab === i,
    onClick: () => setTab(i)
  }, t))), tab === 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: pct,
    showText: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    indeterminate: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPct(p => Math.max(0, p - 10))
  }, "\u221210"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPct(p => Math.min(100, p + 10))
  }, "+10"))), tab === 1 && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 6
    }
  }, ['Layout', 'Transitions', 'Text rendering', 'Composition'].map((t, i) => /*#__PURE__*/React.createElement(ListItem, {
    key: t,
    selected: i === 0,
    icon: /*#__PURE__*/React.createElement(PathIcon, {
      data: I.Layers,
      size: 16,
      color: "var(--text-secondary)"
    })
  }, t))), tab === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Expander, {
    header: "Rendering"
  }, "Composition renderer with a dedicated render thread."), /*#__PURE__*/React.createElement(Expander, {
    header: "Input"
  }, "Pointer, touch, pen and keyboard routed events."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => push('information')
  }, "Info"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => push('warning')
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => push('error')
  }, "Error")), toasts.map(t => /*#__PURE__*/React.createElement(NotificationCard, {
    key: t.id,
    type: t.type,
    title: t.title,
    onClose: () => setToasts(ts => ts.filter(x => x.id !== t.id))
  }, t.body))));
}
Object.assign(window, {
  FeedbackScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/control_catalog/FeedbackScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/control_catalog/FormsScreen.jsx
try { (() => {
const {
  TextBox,
  CheckBox,
  RadioButton,
  ToggleSwitch,
  ComboBox,
  Slider,
  Card,
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
function FormsScreen() {
  const I = window.CATALOG_ICONS;
  const [name, setName] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [theme, setTheme] = React.useState('fluent');
  const [live, setLive] = React.useState(true);
  const [density, setDensity] = React.useState('Normal');
  const [zoom, setZoom] = React.useState(100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TextBox, {
    label: "Project name",
    placeholder: "ControlCatalog",
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement(TextBox, {
    label: "Search",
    placeholder: "Search\u2026",
    innerLeft: /*#__PURE__*/React.createElement(PathIcon, {
      data: I.Search,
      size: 14,
      color: "var(--text-secondary)"
    })
  }), /*#__PURE__*/React.createElement(TextBox, {
    label: "Port",
    value: "80x",
    error: "Enter a whole number."
  }), /*#__PURE__*/React.createElement(ComboBox, {
    items: ['Compact', 'Normal'],
    value: density,
    onChange: setDensity
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: terms,
    onChange: setTerms
  }, "Accept the licence"), /*#__PURE__*/React.createElement(CheckBox, {
    indeterminate: true
  }, "Some platforms selected"), /*#__PURE__*/React.createElement(CheckBox, {
    disabled: true
  }, "Unavailable")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(RadioButton, {
    name: "theme",
    checked: theme === 'fluent',
    onChange: () => setTheme('fluent')
  }, "Fluent theme"), /*#__PURE__*/React.createElement(RadioButton, {
    name: "theme",
    checked: theme === 'simple',
    onChange: () => setTheme('simple')
  }, "Simple theme")), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: live,
    onChange: setLive,
    onContent: "Live preview on",
    offContent: "Live preview off"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-12)',
      color: 'var(--text-secondary)',
      marginBottom: 4
    }
  }, "Zoom"), /*#__PURE__*/React.createElement(Slider, {
    value: zoom,
    min: 50,
    max: 200,
    onChange: setZoom,
    showValue: true
  }))));
}
Object.assign(window, {
  FormsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/control_catalog/FormsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pulse/PulseDetail.jsx
try { (() => {
const {
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;

/* PulseWorkoutDetailView — full-bleed hero with a bottom protection gradient,
   stat strip, then an exercise list on #1a1a1a cards. */
function PulseDetail({
  workout
}) {
  const w = workout || {
    title: 'Full Body Ignite',
    level: 'INTERMEDIATE',
    color: 'var(--pulse-accent)',
    min: '32 min',
    kcal: '450 kcal'
  };
  const exercises = [{
    name: 'Barbell Squats',
    sets: '4 x 10'
  }, {
    name: 'Bench Press',
    sets: '4 x 8'
  }, {
    name: 'Deadlifts',
    sets: '3 x 6'
  }, {
    name: 'Pull Ups',
    sets: '3 x 12'
  }, {
    name: 'Overhead Press',
    sets: '3 x 10'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/pulse/workout_hero.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#00000000 0,#00000066 55%,var(--pulse-bg) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: 1,
      color: w.color
    }
  }, w.level), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      marginTop: 2
    }
  }, w.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '4px 16px 16px'
    }
  }, [[w.min, 'Duration'], [w.kcal, 'Burn'], ['5', 'Exercises']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      padding: 12,
      borderRadius: 16,
      background: 'var(--pulse-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: 1,
      color: 'var(--pulse-text-4)',
      marginTop: 2
    }
  }, l.toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      padding: '0 16px 12px'
    }
  }, "Exercises"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '0 16px 16px'
    }
  }, exercises.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 12,
      borderRadius: 16,
      background: 'var(--pulse-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--pulse-surface-2)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--pulse-text-3)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--pulse-text-3)'
    }
  }, e.sets)), /*#__PURE__*/React.createElement(PathIcon, {
    data: "M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z",
    size: 14,
    color: "var(--pulse-text-4)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      height: 48,
      borderRadius: 12,
      border: 0,
      background: 'var(--pulse-accent)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'inherit'
    }
  }, "Start Workout")));
}
Object.assign(window, {
  PulseDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pulse/PulseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pulse/PulseHome.jsx
try { (() => {
const {
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
const CLOCK = "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z";
const FLAME = "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z";
const BELL = "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z";
const CATS = [{
  title: 'HIIT',
  sessions: '12 Sessions',
  img: '../../assets/img/pulse/cat_hiit.jpg'
}, {
  title: 'Strength',
  sessions: '18 Sessions',
  img: '../../assets/img/pulse/cat_strength.jpg'
}, {
  title: 'Yoga',
  sessions: '8 Sessions',
  img: '../../assets/img/pulse/cat_yoga.jpg'
}];
const RECS = [{
  level: 'INTERMEDIATE',
  color: 'var(--pulse-accent)',
  title: 'Full Body Ignite',
  min: '32 min',
  kcal: '450 kcal',
  img: '../../assets/img/pulse/rec_fullbody.jpg'
}, {
  level: 'BEGINNER',
  color: 'var(--pulse-green)',
  title: 'Sunrise Mobility',
  min: '15 min',
  kcal: '120 kcal',
  img: '../../assets/img/pulse/rec_mobility.jpg'
}, {
  level: 'ADVANCED',
  color: 'var(--pulse-orange)',
  title: 'Power Core 2.0',
  min: '45 min',
  kcal: '600 kcal',
  img: '../../assets/img/pulse/rec_powercore.jpg'
}];
function Meta({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: icon,
    size: 12,
    color: "var(--pulse-text-4)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--pulse-text-3)'
    }
  }, children));
}
function PulseHome({
  onOpen
}) {
  const [chip, setChip] = React.useState(0);
  const chips = ['All Workouts', 'Beginner', '15-30 min', 'Equipment'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '20px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/pulse/profile_avatar.jpg",
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      objectFit: 'cover',
      border: '2px solid #4D256af4'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 2,
      color: 'var(--pulse-text-4)'
    }
  }, "WELCOME BACK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Alex Johnson")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      background: 'var(--pulse-surface)',
      border: '1px solid #4D256af4',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: BELL,
    size: 18,
    color: "var(--pulse-text-3)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '8px 16px 16px',
      overflowX: 'auto'
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setChip(i),
    style: {
      flex: '0 0 auto',
      padding: '10px 18px',
      borderRadius: 999,
      fontSize: 13,
      fontFamily: 'inherit',
      fontWeight: i === chip ? 600 : 500,
      background: i === chip ? 'var(--pulse-accent)' : 'var(--pulse-surface)',
      border: '1px solid ' + (i === chip ? 'var(--pulse-accent)' : 'var(--pulse-hairline)'),
      color: i === chip ? '#fff' : 'var(--pulse-text-3)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Categories"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--pulse-accent)'
    }
  }, "See All")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '0 16px',
      overflowX: 'auto'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      flex: '0 0 auto',
      position: 'relative',
      width: 140,
      height: 190,
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#00000000 0,#00000033 40%,#000000cc 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 300,
      color: 'var(--pulse-text-3)'
    }
  }, c.sessions))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      padding: '20px 16px 12px'
    }
  }, "Recommended for You"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 16px'
    }
  }, RECS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    onClick: () => onOpen(r),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 12,
      borderRadius: 16,
      background: 'var(--pulse-surface)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: r.img,
    alt: "",
    style: {
      width: 80,
      height: 80,
      borderRadius: 12,
      objectFit: 'cover',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: 1,
      color: r.color,
      marginBottom: 2
    }
  }, r.level), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    icon: CLOCK
  }, r.min), /*#__PURE__*/React.createElement(Meta, {
    icon: FLAME
  }, r.kcal))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: 'color-mix(in srgb, ' + r.color + ' 10%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: "M8 5v14l11-7z",
    size: 16,
    color: r.color
  }))))));
}
Object.assign(window, {
  PulseHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pulse/PulseHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pulse/PulseLogin.jsx
try { (() => {
const {
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;

/* PulseLoginView.xaml — 400px max width, 20px stack spacing, 48px controls at
   12px radius, #1e293b fields, #256af4 primary button. */
function PulseField({
  label,
  trailing,
  placeholder,
  type
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--pulse-text-2)'
    }
  }, label), trailing), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 48,
      padding: '0 14px',
      borderRadius: 12,
      fontSize: 13,
      fontFamily: 'inherit',
      color: '#fff',
      outline: 'none',
      background: 'var(--pulse-surface-2)',
      border: '1px solid ' + (focus ? 'var(--pulse-accent)' : 'var(--pulse-surface-2)')
    }
  }));
}
function PulseLogin({
  onLogin
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 32px 32px',
      maxWidth: 400,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'var(--pulse-accent)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: "M7 2v11h3v9l7-12h-4l4-8z",
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "PULSE.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700
    }
  }, "Welcome Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--pulse-text-2)',
      marginTop: 4
    }
  }, "Train harder than yesterday.")), /*#__PURE__*/React.createElement(PulseField, {
    label: "Email Address",
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement(PulseField, {
    label: "Password",
    type: "password",
    placeholder: "Password",
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--pulse-accent)'
      }
    }, "Forgot?")
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      height: 48,
      borderRadius: 12,
      border: 0,
      color: '#fff',
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'inherit',
      background: press ? 'var(--pulse-accent-pressed)' : hover ? 'var(--pulse-accent-hover)' : 'var(--pulse-accent)',
      transition: 'var(--transition-control)'
    }
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--pulse-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 2,
      color: 'var(--pulse-text-3)'
    }
  }, "OR CONTINUE WITH"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--pulse-hairline)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, ['G', '\uf8ff', 'f'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    style: {
      height: 48,
      borderRadius: 12,
      fontSize: 16,
      fontFamily: 'inherit',
      background: 'var(--pulse-surface-2)',
      border: '1px solid var(--pulse-surface-2)',
      color: 'var(--pulse-text-3)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      justifyContent: 'center',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pulse-text-2)'
    }
  }, "New here?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--pulse-accent)'
    }
  }, "Create an account")));
}
Object.assign(window, {
  PulseLogin,
  PulseField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pulse/PulseLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pulse/PulseProfile.jsx
try { (() => {
const {
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;

/* PulseProfileView — avatar header, stat row, settings rows on #1a1a1a. */
function PulseProfile() {
  const rows = ['Account', 'Notifications', 'Units & Measures', 'Connected Devices', 'Privacy'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/pulse/profile_avatar.jpg",
    alt: "",
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      objectFit: 'cover',
      border: '2px solid var(--pulse-accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Alex Johnson"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--pulse-text-3)'
    }
  }, "Member since 2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      margin: '20px 0'
    }
  }, [['128', 'Workouts'], ['42h', 'Time'], ['18', 'Streak']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      padding: 12,
      borderRadius: 16,
      background: 'var(--pulse-surface)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: 1,
      color: 'var(--pulse-text-4)',
      marginTop: 2
    }
  }, l.toUpperCase())))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      borderRadius: 16,
      background: 'var(--pulse-surface)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, r), /*#__PURE__*/React.createElement(PathIcon, {
    data: "M8.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L13.586 11 8.293 5.707a1 1 0 0 1 0-1.414Z",
    size: 14,
    color: "var(--pulse-text-4)"
  })))));
}
Object.assign(window, {
  PulseProfile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pulse/PulseProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pulse/PulseShell.jsx
try { (() => {
const {
  PathIcon
} = window.AvaloniaFluentDesignSystem_a08390;
const TABS = [{
  id: 'home',
  label: 'Home',
  icon: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z'
}, {
  id: 'workouts',
  label: 'Workouts',
  icon: 'M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
}];

/* Phone frame + bottom TabbedPage bar. The frame stands in for the 1px bordered,
   8px-radius Border that PulseAppPage.xaml wraps the NavigationPage in. */
function PulseShell({
  tab,
  onTab,
  showTabs,
  title,
  onBack,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 780,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: 8,
      border: '1px solid var(--pulse-hairline)',
      background: 'var(--pulse-bg)',
      fontFamily: 'var(--font-core)',
      color: 'var(--pulse-text)'
    }
  }, title && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: '1px solid var(--pulse-hairline)'
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      color: 'var(--pulse-text-3)'
    }
  }, /*#__PURE__*/React.createElement(PathIcon, {
    data: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
    size: 20,
    color: "var(--pulse-text-3)"
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--font-size-16)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      minHeight: 0
    }
  }, children), showTabs && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--pulse-hairline)',
      background: 'var(--pulse-surface)'
    }
  }, TABS.map(t => {
    const on = t.id === tab;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab(t.id),
      style: {
        flex: 1,
        minHeight: 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        border: 0,
        background: 'transparent',
        color: on ? 'var(--pulse-accent)' : 'var(--pulse-text-4)',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(PathIcon, {
      data: t.icon,
      size: 20,
      color: on ? 'var(--pulse-accent)' : 'var(--pulse-text-4)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: on ? 600 : 500,
        letterSpacing: '.4px'
      }
    }, t.label));
  })));
}
Object.assign(window, {
  PulseShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pulse/PulseShell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.HyperlinkButton = __ds_scope.HyperlinkButton;

__ds_ns.PathIcon = __ds_scope.PathIcon;

__ds_ns.ToggleButton = __ds_scope.ToggleButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Expander = __ds_scope.Expander;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.NotificationCard = __ds_scope.NotificationCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.TabItem = __ds_scope.TabItem;

__ds_ns.CheckBox = __ds_scope.CheckBox;

__ds_ns.ComboBox = __ds_scope.ComboBox;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.TextBox = __ds_scope.TextBox;

__ds_ns.ToggleSwitch = __ds_scope.ToggleSwitch;

})();
