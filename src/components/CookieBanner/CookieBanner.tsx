import React, { ReactNode, useState, useEffect } from 'react';
import { Container, Row, Col } from '../Layout';
import { SecondaryButton } from '../Button/SecondaryButton';

// Component SCSS.
import './CookieBanner.scss';

// Component props.
export interface CookieBannerProps {
  ariaLabel: string;
  cookieSettingsHref: string;
  cookiePreferenceMessage: ReactNode;
  cookieConfirmationMessage: ReactNode;
  cookiesDisabledMessage: ReactNode;
  nonJavascriptMessage: ReactNode;
  locale?: 'en' | 'cy' | string;
  cookieCallBack?: Function;
}

// Component render.
const CookieBanner = ({
  ariaLabel,
  cookieSettingsHref,
  cookiePreferenceMessage,
  cookieConfirmationMessage,
  cookiesDisabledMessage,
  nonJavascriptMessage,
  locale = 'en',
  cookieCallBack,
}: CookieBannerProps) => {
  // By default the cookie banner is set to display until cookies are accepted.
  const [displayBanner, setDisplayBanner] = useState(true);

  // Dismiss the banner on 'Hide' click.
  function dismissBanner(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.currentTarget.blur();
    setDisplayBanner(false);
  }

  // Non JavaScript and Cookie display settings.
  const [jsEnabled, setJsEnabled] = useState(false);
  const [cookiesEnabled, setCookiesEnabled] = useState(false);

  // Check for browser JavaScript and Cookie settings.
  useEffect(() => {
    setCookiesEnabled(navigator.cookieEnabled);
    setJsEnabled(true);
  }, []);

  // By default cookies are not accepted if the banner is displayed.
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    setCookiesAccepted(true);

    // Cookie callback script.
    if (cookieCallBack) cookieCallBack();
  };

  return (
    <>
      {/* Step 1 - Check the banner is set to display. */}
      {displayBanner && (
        <>
          {/* Step 2 - Check Javascript is enabled in the browser. */}
          {jsEnabled ? (
            <div
              id='gw-cookie-banner'
              className='gw-cookie-banner'
              role='region'
              aria-label={ariaLabel}
            >
              <Container>
                <Row>
                  <Col>
                    {/* Step 3 - Check Cookies are not disabled in the browser. */}
                    {cookiesEnabled ? (
                      <>
                        {/* Step 4 - If cookies are accepted, display the confirmation message. */}
                        {cookiesAccepted ? (
                          <div className='gw-cookie-banner__confirmation'>
                            <div>{cookieConfirmationMessage}</div>
                            <div>
                              <SecondaryButton
                                as='button'
                                icon='close'
                                iconOnly={true}
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {
                                  dismissBanner(event);
                                }}
                              >
                                {locale === 'cy' ? (
                                  <>Cuddio’r hysbysiad hwn</>
                                ) : (
                                  <>Hide this notification</>
                                )}
                              </SecondaryButton>
                            </div>
                          </div>
                        ) : (
                          <div className='gw-cookie-banner__statement'>
                            <div>{cookiePreferenceMessage}</div>
                            <div>
                              <SecondaryButton
                                as='button'
                                size='sm'
                                id='acceptCookies'
                                onClick={(
                                  event: React.MouseEvent<HTMLButtonElement>
                                ) => {
                                  handleAcceptCookies(event);
                                }}
                              >
                                {locale === 'cy'
                                  ? 'Derbyn pob cwci'
                                  : 'Accept all cookies'}
                              </SecondaryButton>
                              <SecondaryButton
                                as='link'
                                size='sm'
                                id='cookieOptions'
                                href={cookieSettingsHref}
                              >
                                {locale === 'cy'
                                  ? 'Newid gosodiadau cwcis'
                                  : 'Change cookie settings'}
                              </SecondaryButton>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className='gw-cookie-banner__cookies-disabled'>
                        {cookiesDisabledMessage}
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (
            <noscript>
              <div
                id='gw-cookie-banner'
                className='gw-cookie-banner'
                role='region'
                aria-label={ariaLabel}
              >
                <Container>
                  <Row>
                    <Col>
                      <div className='gw-cookie-banner__js-disabled'>
                        <div>{nonJavascriptMessage}</div>
                        <SecondaryButton
                          as='link'
                          size='sm'
                          href={cookieSettingsHref}
                        >
                          {locale === 'cy'
                            ? 'Ynglŷn â chwcis'
                            : 'About cookies'}
                        </SecondaryButton>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </noscript>
          )}
        </>
      )}
    </>
  );
};

export default CookieBanner;
