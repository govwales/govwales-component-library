import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import ReportThisPageLink from './ReportThisPageLink';
import React from 'react';

// Storybook Meta.
const meta: Meta<typeof ReportThisPageLink> = {
  title: 'Components/Link/Report this page',
  id: 'gw-link-report-this-page',
  component: ReportThisPageLink,
};

export default meta;
type Story = StoryObj<typeof ReportThisPageLink>;

export const Default: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <ReportThisPageLink
        locale={locale}
        href={
          'mailto:siteemail@sitedomain?url=sitedomain&subject=pageURL&body=Page%20URL%3A%20https%3A//sitedomain%0APage%20Title%3A%20Title'
        }
      />
    );
  },
};
