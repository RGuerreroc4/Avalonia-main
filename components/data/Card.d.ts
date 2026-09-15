import * as React from 'react';

/**
 * Surface container — the Border pattern used across the Avalonia samples.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  /** Corner radius. 8px desktop default; use var(--radius-pulse-card) for mobile showcases. */
  radius?: string;
  /** Background. Default rgba(255,255,255,0.15) frosted glass; pass any surface token to override. */
  surface?: string;
  /** Draw the 1px hairline. Default false. */
  bordered?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
