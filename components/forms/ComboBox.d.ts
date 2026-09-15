import * as React from 'react';

/**
 * Closed-by-default dropdown selector (Avalonia ComboBox).
 * @startingPoint section="Forms" subtitle="Dropdown selector with transient flyout" viewport="700x220"
 */
export interface ComboBoxItem { value: string; label?: string; }
export interface ComboBoxProps {
  /** Options — strings, or { value, label } objects. */
  items?: Array<string | ComboBoxItem>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Pulse mobile-showcase variant: 48px control, 12px radius, filled #1e293b. */
  pulse?: boolean;
  style?: React.CSSProperties;
}
export declare function ComboBox(props: ComboBoxProps): JSX.Element;
