import { ReactNode } from 'react';
import classNames from 'classnames';

// Based on React Bootstrap Col display modified for GOV.WALES application.
// https://react-bootstrap.netlify.app/docs/layout/grid/

const Breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

type Cols =
  | number
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';
type ColPushPull =
  | number
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'; // 12 should not be required.
type ColSize = boolean | number | 'auto' | string;
type ColOrder = boolean;
type ColDisplay = boolean;
type ColSpec =
  | ColSize
  | {
      size?: ColSize;
      push?: ColPushPull;
      pull?: ColPushPull;
      first?: ColOrder;
      last?: ColOrder;
      displayNone?: ColDisplay;
    };

export function useCol({ colProps, ...props }: ColProps): [any] {
  let colClass = 'gw-col';
  const classes: string[] = [colClass];

  Breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];

    // Class display props.
    let size: ColSize | undefined;
    let push: Cols | undefined;
    let pull: Cols | undefined;
    let first: ColOrder | undefined;
    let last: ColOrder | undefined;
    let displayNone: ColDisplay | undefined;

    if (typeof propValue === 'object' && propValue != null) {
      ({ size } = propValue);
      ({ push } = propValue);
      ({ pull } = propValue);
      ({ first } = propValue);
      ({ last } = propValue);
      ({ displayNone } = propValue);
    } else {
      size = propValue;
    }

    // Col breakpoint class.
    const breakPoint = `-${brkPoint}`;

    // Col size class.
    if (size)
      classes.push(
        size === true
          ? `${colClass}${breakPoint}` // Outcome gw-col-xs
          : `${colClass}${breakPoint}-${size}` // Outcome gw-col-xs-12
      );

    // Col push and pull classes.
    if (push != null) classes.push(`${colClass}${breakPoint}-push-${push}`); // Outcome gw-col-xs-push-6
    if (pull != null) classes.push(`${colClass}${breakPoint}-pull-${pull}`); // Outcome gw-col-xs-pull-6

    // Col modifier classes.
    if (first != null) classes.push(`${colClass}${breakPoint}--first`); // Outcome gw-col-xs--first
    if (last != null) classes.push(`${colClass}${breakPoint}--last`); // Outcome gw-col-xs--last
    if (displayNone != null)
      classes.push(`${colClass}${breakPoint}--display-none`); // Outcome gw-col-xs--display-none
  });

  return [{ ...props, className: classNames(classes) }];
}

// Col component props.
export interface ColProps {
  children?: ReactNode;
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
  xl?: ColSpec;
  xxl?: ColSpec;
  id?: string;
  role?: string;
  modifierClass?: string;
  [key: string]: any;
}

// Col component render.
export const Col = (props: ColProps) => {
  const [{ className }] = useCol(props);
  const classes: string[] = [className];
  if (props.modifierClass != null) classes.push(`${props.modifierClass}`);

  return (
    <div id={props.id} role={props.role} className={classNames(classes)}>
      {props.children}
    </div>
  );
};

// Row component types.
type ColsTypes = string | 'reversed' | 'centered';

// Row component props.
export interface RowProps {
  children?: ReactNode;
  modifierClass?: ColsTypes;
  id?: string;
}

// Row component render.
export const Row = ({ children, id, modifierClass }: RowProps) => {
  let rowClass = 'gw-row';
  const classes: string[] = [rowClass];
  if (modifierClass != null) classes.push(`${rowClass}--${modifierClass}`);

  return (
    <div className={classNames(classes)} id={id}>
      {children}
    </div>
  );
};

// Component props.
export interface ContainerProps {
  children?: ReactNode;
  fluid?: boolean;
  id?: string;
  role?: string;
  modifierClass?: string;
}

// Component render.
export const Container = ({
  children,
  fluid,
  id,
  role,
  modifierClass,
}: ContainerProps) => {
  let containerClass = 'gw-container';
  const classes: string[] = [];
  classes.push(
    fluid === true
      ? `${containerClass}-fluid` // Outcome gw-container-fluid
      : `${containerClass}` // Outcome gw-container
  );
  if (modifierClass != null) classes.push(`${modifierClass}`);

  return (
    <div className={classNames(classes)} id={id} role={role}>
      {children}
    </div>
  );
};
