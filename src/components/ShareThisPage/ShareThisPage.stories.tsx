import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';

// Import React component.
import ShareThisPage from './ShareThisPage';

// Storybook Meta.
const meta: Meta = {
  title: 'Components/Share this page',
  id: 'gw-share-this-page',
  component: ShareThisPage,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <ShareThisPage
        locale={locale}
        shareLinks={[
          {
            href: '#',
            title: 'X',
            method: 'x',
          },
          {
            href: '#',
            title: 'Facebook',
            method: 'facebook',
          },
          {
            href: '#',
            title: 'Email',
            method: 'email',
          },
        ]}
      />
    );
  },
};

export const Expanded: Story = {
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
  args: {
    locale: 'en',
    shareLinks: [
      {
        href: '#',
        title: 'X',
        method: 'x',
      },
      {
        href: '#',
        title: 'Facebook',
        method: 'facebook',
      },
      {
        href: '#',
        title: 'Email',
        method: 'email',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const shareThisButton = canvas.getByText('Share this page');
    await expect(shareThisButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(shareThisButton);
    await expect(shareThisButton).toHaveAttribute('aria-expanded', 'true');
  },
};
