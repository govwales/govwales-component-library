import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SkipLink from './SkipLink';
import React from 'react';

// Storybook Meta.
const meta: Meta<typeof SkipLink> = {
  title: 'Components/Link/Skip',
  component: SkipLink,
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <SkipLink locale={locale} elementId={'storybook-docs'} />;
  },
};
