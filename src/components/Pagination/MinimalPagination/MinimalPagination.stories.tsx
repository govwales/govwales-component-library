import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import MinimalPagination from './MinimalPagination';

// Storybook Meta.
const meta: Meta<typeof MinimalPagination> = {
  title: 'Components/Minimal Pagination',
  id: 'gw-pagination',
  component: MinimalPagination,
};

export default meta;
type Story = StoryObj<typeof MinimalPagination>;

export const Previous: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <MinimalPagination
        locale={locale}
        currentPage={2}
        destinationPageLabel={1}
        totalPages={20}
        direction='prev'
        href='#'
      />
    );
  },
};

export const Next: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <MinimalPagination
        locale={locale}
        currentPage={2}
        destinationPageLabel={3}
        totalPages={20}
        direction='next'
        href='#'
      />
    );
  },
};
