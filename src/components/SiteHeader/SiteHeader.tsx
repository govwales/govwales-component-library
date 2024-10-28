import { FormEventHandler } from 'react';
import { Container } from '../Layout';
import SiteLogo from '../SiteLogo/SiteLogo';
import { PrimaryButton } from '../Button';
import SiteSearch from '../SiteSearch/SiteSearch';

// Component SCSS.
import './SiteHeader.scss';

// Text input props
export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
}

// Component props.
export interface SiteHeaderProps {
  breadcrumbs: boolean;
  formHandleSubmit?: FormEventHandler<HTMLFormElement>;
  globalSearch?: boolean;
  href?: string;
  locale?: string;
  logoID: string;
  searchButtonLabel?: string;
  textInput?: TextInputProps;
  logoHref?: string;
}

// Component render.
const SiteHeader = ({
  breadcrumbs = false,
  formHandleSubmit,
  globalSearch = true,
  href,
  locale,
  logoID,
  searchButtonLabel,
  textInput,
  logoHref,
}: SiteHeaderProps) => {
  let headerClasses;

  if (breadcrumbs) {
    headerClasses = 'gw-site-header';
  } else {
    headerClasses = 'gw-site-header gw-site-header--without-breadcrumb';
  }

  return (
    <header className={headerClasses} id='gw-site-header'>
      <Container>
        <div className='gw-site-header__branding'>
          <SiteLogo locale={locale} id={logoID} href={logoHref} />
        </div>
        <div className='gw-site-header__wrapper'>
          {href && (
            <div className='gw-site-header__language'>
              <PrimaryButton
                as='link'
                href={href}
                hrefLang={locale === 'cy' ? 'en' : 'cy'}
                size='sm'
                colour='black'
                role='button'
                lang={locale}
                id='gw-language-switcher'
              >
                {locale === 'cy' ? 'English' : 'Cymraeg'}
              </PrimaryButton>
            </div>
          )}
          {globalSearch && textInput && searchButtonLabel && (
            <div className='gw-site-header__search'>
              <SiteSearch
                searchButtonLabel={searchButtonLabel}
                textInput={{
                  name: textInput.name,
                  id: textInput.id,
                  label: textInput.label,
                  value: textInput.value,
                  placeholder: textInput.placeholder,
                }}
                formHandleSubmit={formHandleSubmit}
              />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

// Component export.
export default SiteHeader;
