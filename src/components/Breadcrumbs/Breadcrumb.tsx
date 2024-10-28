export interface BreadcrumbProps {
  href: string;
  title: string;
  current?: boolean;
}

const Breadcrumb = ({ href, title, current }: BreadcrumbProps) => {
  let className = 'gw-link-breadcrumb';
  if (current === true) {
    className += ' gw-link-breadcrumb--current';
  }
  return (
    <a
      href={href}
      aria-current={current ? 'page' : false}
      className={className}
    >
      {title}
    </a>
  );
};

export default Breadcrumb;
