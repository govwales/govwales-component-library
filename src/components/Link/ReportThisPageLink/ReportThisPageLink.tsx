import { Link } from '../Link';

// Component SCSS.
import './ReportThisPageLink.scss';

// Component props.
export interface ReportThisPageLinkProps {
  locale?: string;
  href: string;
}

// Component render.
const ReportThisPageLink = ({ locale, href }: ReportThisPageLinkProps) => {
  let label;

  if (locale === 'cy') {
    label = "Adrodd am unrhyw beth sy'n bod gyda'r dudalen hon";
  } else {
    label = 'Report anything wrong with this page';
  }

  return (
    <Link href={href} className='gw-link--report-this-page'>
      {label}
    </Link>
  );
};

// Component export.
export default ReportThisPageLink;
