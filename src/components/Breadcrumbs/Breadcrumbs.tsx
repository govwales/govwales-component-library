import React, { Children, ReactNode } from 'react';

// Component SCSS.
import './Breadcrumbs.scss';

// Component props.
export interface BreadcrumbsProps {
  children: ReactNode;
  locale: string;
}

const Breadcrumbs = ({ children, locale }: BreadcrumbsProps) => {
  const arrayChildren = Children.toArray(children);

  let ariaLabel = 'Breadcrumb links';
  if (locale === 'cy') {
    ariaLabel = 'Dolenni briwsion bara';
  }

  return (
    <nav className='gw-breadcrumbs gw-none-print' aria-label={ariaLabel}>
      <ul className='gw-breadcrumbs__list'>
        {children &&
          React.Children.map(arrayChildren, (child, index) => (
            <li
              className={
                index === arrayChildren.length - 2
                  ? 'gw-breadcrumbs__item gw-breadcrumbs__item--parent'
                  : 'gw-breadcrumbs__item'
              }
            >
              {React.isValidElement(child) && React.cloneElement(child)}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
