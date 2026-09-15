repo: RGuerreroc4/Avalonia-main
branch: main

## Last sync

date: 2026-07-31T14:34:29Z

### Updated in this project

- Extracted the Fluent theme palette, radii and control paddings into `tokens/`.
- Copied the five Inter weights, the Avalonia app icon and the Pulse photography.
- Built 16 components from the Fluent control resources.
- Recreated the ControlCatalog desktop shell and the Pulse mobile showcase.

## Screen map

| Screen | Built from |
| --- | --- |
| `ui_kits/control_catalog/index.html` | `samples/ControlCatalog/MainView.xaml`, `samples/ControlCatalog/Icons.cs` |
| `ui_kits/control_catalog/CatalogShell.jsx` | `samples/ControlCatalog/MainView.xaml` |
| `ui_kits/control_catalog/ButtonsScreen.jsx` | `src/Avalonia.Themes.Fluent/Accents/FluentControlResources.xaml` (Button, ToggleButton, HyperlinkButton) |
| `ui_kits/control_catalog/FormsScreen.jsx` | `FluentControlResources.xaml` (TextBox, CheckBox, RadioButton, ComboBox, Slider), `BaseResources.xaml` |
| `ui_kits/control_catalog/FeedbackScreen.jsx` | `FluentControlResources.xaml` (ProgressBar, NotificationCard, Expander) |
| `ui_kits/pulse/PulseLogin.jsx` | `samples/ControlCatalog/Pages/NavigationPage/PulseLoginView.xaml` |
| `ui_kits/pulse/PulseHome.jsx` | `samples/ControlCatalog/Pages/NavigationPage/PulseHomeView.xaml` |
| `ui_kits/pulse/PulseDetail.jsx` | `samples/ControlCatalog/Pages/NavigationPage/PulseWorkoutDetailView.xaml` |
| `ui_kits/pulse/PulseProfile.jsx` | `samples/ControlCatalog/Pages/NavigationPage/PulseProfileView.xaml` |
| `ui_kits/pulse/PulseShell.jsx` | `samples/ControlCatalog/Pages/NavigationPage/PulseAppPage.xaml` |
| `tokens/colors.css` | `Accents/BaseColorsPalette.xaml`, `Accents/SystemAccentColors.cs`, `Pulse*View.xaml` |
| `tokens/spacing.css`, `tokens/shape.css`, `tokens/typography.css` | `Accents/BaseResources.xaml`, `FluentControlResources.xaml` |
| `assets/icons/paths.js` | `samples/ControlCatalog/Icons.cs` |
