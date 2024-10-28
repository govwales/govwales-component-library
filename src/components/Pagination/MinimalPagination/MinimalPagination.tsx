// Component SCSS.
import './MinimalPagination.scss';

// Component props.
export interface MinimalPaginationProps {
  currentPage: number;
  destinationPageLabel?: number;
  totalPages: number;
  href?: string;
  locale?: string;
  direction?: string;
}

// Component render.
const MinimalPagination = ({
  currentPage = 1,
  totalPages = 1,
  destinationPageLabel,
  href,
  direction,
  locale,
}: MinimalPaginationProps) => {
  let title, label, of, visuallyHidden, classes, destinationPage;

  if (locale === 'cy') {
    visuallyHidden = 'tudalen';
    of = ' o ';
  } else {
    visuallyHidden = 'page';
    of = ' of ';
  }

  if (direction === 'prev') {
    classes = 'gw-minimal-pagination-link gw-minimal-pagination-link--prev';
    destinationPage = currentPage - 1;

    if (locale === 'cy') {
      title = 'Blaenorol';
    } else {
      title = 'Previous';
    }
  } else {
    classes = 'gw-minimal-pagination-link gw-minimal-pagination-link--next';
    destinationPage = currentPage + 1;

    if (locale === 'cy') {
      title = 'Nesaf';
    } else {
      title = 'Next';
    }
  }

  if (!destinationPageLabel) {
    destinationPageLabel = destinationPage;
  }

  label = destinationPageLabel + of + totalPages;

  return (
    <a className={classes} href={href}>
      <span className='gw-minimal-pagination-link__title'>
        {title}
        <span className='gw-visually-hidden'> {visuallyHidden}</span>
      </span>
      <span className='gw-minimal-pagination-link__label'>{label}</span>
    </a>
  );
};

// Component export.
export default MinimalPagination;
