import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SiteUtilities from './SiteUtilities';

// Storybook Meta.
const meta: Meta<typeof SiteUtilities> = {
  title: 'Components/Site Utilities',
  id: 'gw-site-utilities',
  component: SiteUtilities,
};

export default meta;
type Story = StoryObj<typeof SiteUtilities>;

export const Utilities: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SiteUtilities
        locale={locale}
        elementId={'storybook-docs'}
        shareLinks={[
          {
            href: 'https://x.com/intent/post?url=%URL%',
            title: 'X',
            method: 'x',
          },
          {
            href: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
            title: 'Facebook',
            method: 'facebook',
          },
          {
            href: 'mailto:?body=%URL%&subject=Shared%20from%20%URL%',
            title: 'Email',
            method: 'email',
          },
        ]}
        forceDisplay={true}
      />
    );
  },
};
