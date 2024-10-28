import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SiteHeader from './SiteHeader';

// Storybook Meta.
const meta: Meta<typeof SiteHeader> = {
  title: 'Components/Site Header',
  id: 'gw-site-header',
  component: SiteHeader,
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`Form submit example`);
};

export const SiteHeaderWithoutLanguageButton: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteHeader
        locale={locale}
        globalSearch={false}
        breadcrumbs={false}
        logoID='gw-logo'
      />
    );
  },
};

export const SiteHeaderWithoutGlobalSearch: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteHeader
        locale={locale}
        globalSearch={false}
        href='#'
        breadcrumbs={true}
        logoID='gw-logo'
      />
    );
  },
};

export const SiteHeaderWithGlobalSearch: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteHeader
        locale={locale}
        href='#'
        breadcrumbs={true}
        logoID='gw-logo'
        textInput={{
          id: 'gw-site-search-input',
          name: 'globalkeywords',
          label: locale === 'cy' ? 'Chwilio' : 'Search',
        }}
        searchButtonLabel={
          locale === 'cy' ? "Chwilio'r wefan" : 'Search website'
        }
        formHandleSubmit={formSubmit}
      />
    );
  },
};

export const SiteHeaderWithoutBreadcrumbs: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteHeader
        locale={locale}
        href='#'
        breadcrumbs={false}
        logoID='gw-logo'
        textInput={{
          id: 'gw-site-search-input',
          name: 'globalkeywords',
          label: locale === 'cy' ? 'Chwilio' : 'Search',
        }}
        searchButtonLabel={
          locale === 'cy' ? "Chwilio'r wefan" : 'Search website'
        }
        formHandleSubmit={formSubmit}
      />
    );
  },
};
