import * as React from 'react';

/**
 * 4px determinate or indeterminate progress track.
 */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100. Ignored when indeterminate. */
  value?: number;
  /** Runs the looping indicator instead. */
  indeterminate?: boolean;
  /** Show the percentage below the track. */
  showText?: boolean;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
