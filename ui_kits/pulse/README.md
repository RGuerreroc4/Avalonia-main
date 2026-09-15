# Pulse — mobile showcase UI kit

Recreation of the Pulse fitness sample in `samples/ControlCatalog/Pages/NavigationPage`
(`PulseAppPage.xaml`, `PulseLoginView.xaml`, `PulseHomeView.xaml`, `PulseWorkoutDetailView`).
It demonstrates `NavigationPage` + `TabbedPage`: login is the nav root, logging in pushes the
tabbed dashboard and `RemovePage`s the login, and tapping a workout card pushes a detail page.

This surface deliberately departs from the desktop Fluent tokens — dark #0b0b0b canvas,
#256af4 accent, 12/16px radii, 48px controls. Those values live under the `--pulse-*`
tokens in `tokens/colors.css` and `tokens/shape.css`.

Screens: `PulseLogin.jsx`, `PulseHome.jsx`, `PulseDetail.jsx`, `PulseShell.jsx`.
