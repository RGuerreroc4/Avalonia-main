Renders one of Avalonia's path-geometry icons; use it anywhere the source XAML uses `<PathIcon Data="..."/>`.

```jsx
import { ICONS } from '../../assets/icons/paths.js';
<PathIcon data={ICONS.Bell} size={16} color="var(--text-secondary)" />
```

Sizes: 20 is the theme default (`IconElementThemeHeight`); 16 is used in nav lists and inside buttons. Never substitute an emoji or a hand-drawn SVG — pull from `assets/icons/paths.js`.
