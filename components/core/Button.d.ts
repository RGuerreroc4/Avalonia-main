import * as React from 'react';

/**
 * Fluent-theme Button: standard, accent, outline and transparent fills.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Fill treatment. "accent" is the AccentButton theme. Default "standard". */
  variant?: 'standard' | 'accent' | 'outline' | 'transparent';
  /** Leading glyph — pass a <PathIcon/>. */
  icon?: React.ReactNode;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
