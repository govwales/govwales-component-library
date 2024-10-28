import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SiteFooter from './SiteFooter';

// Menu Example Data.
import { PrimaryMenuData, SecondaryMenuData } from './DataExample';

// Storybook Meta.
const meta: Meta<typeof SiteFooter> = {
  title: 'Components/Site Footer',
  id: 'gw-site-footer',
  component: SiteFooter,
};

export default meta;
type Story = StoryObj<typeof SiteFooter>;

// Footer without links.
export const Footer: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <SiteFooter locale={locale} />;
  },
};

// Footer with secondary links.
export const FooterWithSecondaryNavigation: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteFooter
        locale={locale}
        secondaryMenu={SecondaryMenuData}
        logoID='gw-footer-logo'
      />
    );
  },
};

// Footer with primary and secondary links.
export const FooterWithPrimaryAndSecondaryNavigation: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteFooter
        locale={locale}
        primaryMenu={PrimaryMenuData}
        secondaryMenu={SecondaryMenuData}
        logoID='gw-footer-logo'
      />
    );
  },
};
