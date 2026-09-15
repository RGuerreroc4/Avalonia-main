import * as React from 'react';

/**
 * One row of a ListBox / navigation drawer (Avalonia ListBoxItem).
 */
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  /** Leading 20px glyph slot — pass a <PathIcon/>. */
  icon?: React.ReactNode;
}
export declare function ListItem(props: ListItemProps): JSX.Element;
