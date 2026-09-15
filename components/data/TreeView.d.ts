import * as React from 'react';

export interface TreeNode {
  name: string;
  /** Leading glyph for device / accessory leaves — a PathIcon node or a 24x24 path string. Omit on structural rows. */
  icon?: React.ReactNode | string;
  /** Right-column status dot on a device leaf: green when 'on', dim when 'off'. */
  status?: 'on' | 'off';
  /** Child count shown in the right meta column of a structural row. */
  count?: number;
  /** Expanded on first render (default true). Structural rows only. */
  defaultExpanded?: boolean;
  /** Child rows. A node with children is structural/expandable (shows a +/- glyph, no icon). */
  items?: TreeNode[];
  /** Alias for items. */
  children?: TreeNode[];
}

/**
 * Project-navigator tree. Any node with children is a structural row (site,
 * location, floor, room): it shows a +/- toggle glyph inside the pill, no icon,
 * and its child count in the right meta column. Leaf nodes are devices: they
 * show a PathIcon and a status dot in that same right column. Every row is a
 * 16px pill across rest / hover / selected.
 */
export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Root nodes. */
  nodes?: TreeNode[];
  /** Alias for nodes (back-compat). */
  rooms?: TreeNode[];
  /** Selected leaf key — a slash-joined index path, e.g. "0/1/2". */
  selected?: string;
  onSelect?: (key: string) => void;
}
export declare function TreeView(props: TreeViewProps): JSX.Element;
