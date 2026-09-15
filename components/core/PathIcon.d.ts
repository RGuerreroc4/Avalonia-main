import * as React from 'react';

/**
 * Renders a 24x24 SVG path glyph — Avalonia's PathIcon primitive.
 */
export interface PathIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** SVG path geometry (24x24 viewBox), e.g. Icons.Bell */
  data: string;
  /** Rendered box in px. Theme default is 20 (IconElementThemeHeight). */
  size?: number;
  /** Fill colour. */
  color?: string;
}
export declare function PathIcon(props: PathIconProps): JSX.Element;
