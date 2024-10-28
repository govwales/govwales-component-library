// Component props.
export interface SiteLogoProps {
  locale?: string;
  href?: string;
  id?: string;
}

// Component render.
const SiteLogo = ({ locale, href = '', id }: SiteLogoProps) => {
  let hiddenDescription: string;
  let title: string;
  let logoHref: string;

  if (locale === 'cy') {
    title = 'Llywodraeth Cymru';
    hiddenDescription = 'Go to the LLYW.CYMRU homepage';
    logoHref = 'https://llyw.cymru';
  } else {
    title = 'Welsh Government';
    hiddenDescription = 'Go to the GOV.WALES homepage';
    logoHref = 'https://gov.wales';
  }

  return (
    <a href={href ? href : logoHref} title={title ? title : undefined} id={id}>
      <span className='gw-visually-hidden'>{hiddenDescription}</span>
    </a>
  );
};

// Component export.
export default SiteLogo;
