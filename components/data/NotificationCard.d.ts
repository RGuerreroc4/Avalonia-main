import * as React from 'react';

/**
 * Toast card with a coloured status rail (Avalonia NotificationCard).
 */
export interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status colour. Default "information". */
  type?: 'information' | 'success' | 'warning' | 'error';
  title?: string;
  /** Dismiss handler — omit to hide the close button. */
  onClose?: () => void;
}
export declare function NotificationCard(props: NotificationCardProps): JSX.Element;
