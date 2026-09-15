# ControlCatalog — desktop UI kit

Recreation of `samples/ControlCatalog` running under the Fluent theme: a split `DrawerPage`
(260px drawer, 52px compact) with the Avalonia icon in the drawer header, a search
`TextBox` with `InnerLeftContent`, a `ListBox` of pages using 16px `PathIcon` glyphs, an
`Expander` settings footer opening upward with stacked `ComboBox`es, and a `NavigationPage`
content host.

Screens: `CatalogShell.jsx` (chrome), `ButtonsScreen.jsx`, `FormsScreen.jsx`,
`FeedbackScreen.jsx`. Source of truth: `MainView.xaml`, `Icons.cs`,
`Accents/FluentControlResources.xaml`.
