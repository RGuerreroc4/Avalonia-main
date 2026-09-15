import * as React from 'react';

/**
 * Single-line text input with the Fluent focus border and inner content slots.
 */
export interface TextBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /** Caption above the field. */
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  /** Validation message; also turns the border red. */
  error?: string;
  /** InnerLeftContent — e.g. a search <PathIcon/>. */
  innerLeft?: React.ReactNode;
  /** InnerRightContent — e.g. a clear button. */
  innerRight?: React.ReactNode;
  /** Pulse mobile-showcase variant: 48px tall, 12px radius, filled #1e293b surface, borderless at rest, accent border on focus. */
  pulse?: boolean;
}
export declare function TextBox(props: TextBoxProps): JSX.Element;
