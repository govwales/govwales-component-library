import classNames from 'classnames';
import { Link, LinkProps } from '../Link';

// Component SCSS.
import './SocialMediaLink.scss';

// Component props.
export interface SocialMediaLinkProps extends LinkProps {
  platform:
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'pinterest'
    | 'youtube'
    | 'flickr'
    | 'x'
    | 'email'
    | 'newsletter';
  title: string;
  locale?: 'en' | 'cy';
  iconOnly?: boolean;
  size?: 'sm';
}

// Component render.
const SocialMediaLink = ({
  platform,
  title,
  locale,
  iconOnly,
  size,
  ...props
}: SocialMediaLinkProps) => {
  const linkClasses: string[] = [
    `gw-social-media-link`,
    `gw-social-media-link--` + platform,
    iconOnly ? `gw-social-media-link--icon-only` : ``,
    size ? `gw-social-media-link--${size}` : ``,
  ];

  let hiddenTitle = 'Share this page via';

  if (locale === 'cy') {
    hiddenTitle = 'Rhannwch y dudalen hon ar';
  }

  const { ...rest } = props;

  return (
    <Link className={classNames(linkClasses)} {...rest}>
      {iconOnly ? (
        <span className='gw-visually-hidden'>{`${hiddenTitle} ${title}`}</span>
      ) : (
        <>
          <span className='gw-visually-hidden'>{hiddenTitle}</span> {title}
        </>
      )}
    </Link>
  );
};

// Component export.
export default SocialMediaLink;
