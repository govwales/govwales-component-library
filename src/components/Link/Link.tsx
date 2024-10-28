import React, { ReactNode } from 'react';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.AriaAttributes {
  children?: ReactNode;
}

export const Link: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props;

  return <a {...rest}>{children}</a>;
};
