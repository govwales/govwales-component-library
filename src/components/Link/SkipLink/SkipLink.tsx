import { Link, LinkProps } from '../Link';
import { Container } from '../../Layout';

// Component SCSS.
import './SkipLink.scss';

// Component props.
export interface SkipLinkProps extends LinkProps {
  locale: string;
  elementId: string;
}

// Component render.
const SkipLink = ({ locale, elementId }: SkipLinkProps) => {
  let label;

  if (locale === 'cy') {
    label = "Neidio i'r prif gynnwy";
  } else {
    label = 'Skip to main content';
  }

  return (
    <Container fluid={true} modifierClass={'gw-container--grey gw-none-print'}>
      <Link
        href={'#' + elementId}
        className={
          'gw-visually-hidden gw-visually-hidden--focusable gw-link--skip'
        }
        id={'skip-to-main'}
      >
        {label}
      </Link>
    </Container>
  );
};

// Component export.
export default SkipLink;
