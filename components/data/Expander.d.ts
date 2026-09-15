import * as React from 'react';

/**
 * Collapsible section with a header plate and chevron.
 */
export interface ExpanderProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  /** Controlled open state; omit for self-managed. */
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  /** "up" places the content above the header, as in the catalog settings footer. */
  direction?: 'down' | 'up';
}
export declare function Expander(props: ExpanderProps): JSX.Element;
