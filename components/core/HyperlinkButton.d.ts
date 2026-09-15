import * as React from 'react';

/**
 * Accent-coloured underlined text link button (Avalonia HyperlinkButton).
 */
export interface HyperlinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Renders in the visited purple (#681DA8). */
  visited?: boolean;
  disabled?: boolean;
}
export declare function HyperlinkButton(props: HyperlinkButtonProps): JSX.Element;
