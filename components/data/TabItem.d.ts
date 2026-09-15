import * as React from 'react';

/**
 * One tab header in a TabControl / TabStrip.
 */
export interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  icon?: React.ReactNode;
  /** "vertical" moves the accent rule to the left edge. */
  orientation?: 'horizontal' | 'vertical';
}
export declare function TabItem(props: TabItemProps): JSX.Element;
