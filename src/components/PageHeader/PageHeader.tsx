import DOMPurify from 'dompurify';
import './PageHeader.scss';

export interface PageHeaderProps {
  heading: string;
  subHeading?: string;
  border?: boolean;
}

const PageHeader = ({ heading, subHeading, border }: PageHeaderProps) => {
  const sanitizedHeading = () => ({
    __html: DOMPurify.sanitize(heading, {
      ALLOWED_TAGS: ['sub', 'sup', 'span', 'abbr'],
    }),
  });

  let sanitizedSubHeading;

  if (subHeading) {
    sanitizedSubHeading = () => ({
      __html: DOMPurify.sanitize(subHeading, {
        ALLOWED_TAGS: ['sub', 'sup', 'span', 'abbr'],
      }),
    });
  }

  return (
    <header
      className={`gw-page-header${
        border ? ' gw-page-header--with-border' : ''
      }`}
    >
      {sanitizedSubHeading && (
        <div
          className={'gw-page-header__subheading'}
          dangerouslySetInnerHTML={sanitizedSubHeading()}
        />
      )}
      <h1
        className={'gw-page-header__heading'}
        dangerouslySetInnerHTML={sanitizedHeading()}
      />
    </header>
  );
};

// Component export.
export default PageHeader;
