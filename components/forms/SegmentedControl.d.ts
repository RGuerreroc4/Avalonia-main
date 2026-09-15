import * as React from 'react';

/**
 * Pill switcher — a rounded track of equal pills; the active pill fills with the
 * accent. For 2–4 mutually exclusive short options (e.g. Rooms / Categories).
 */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Pill labels in order. */
  items: string[];
  /** Active label, or its index. */
  value?: string | number;
  onChange?: (item: string, index: number) => void;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
