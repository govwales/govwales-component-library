import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import Card from './Card';

// Storybook Meta.
const meta: Meta<typeof Card> = {
  title: 'Components/Cards/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

// Variants
export const Default: Story = {
  // Props.
  args: {
    title: 'Card title',
    url: 'https://gov.wales',
    metadataDate: '2023-04-21',
  },
  argTypes: {
    metadataDate: {
      control: { type: 'text' },
    },
    metadataTime: {
      control: { type: 'text' },
    },
    callOutType: {
      options: ['none', 'warning', 'alert'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
        },
      },
    },
  },
};

// With description.
export const WithDescription: Story = {
  // Props.
  args: {
    title: 'Card title',
    url: 'https://gov.wales',
    description: 'Card description',
  },
  argTypes: {
    metadataDate: {
      control: { type: 'text' },
    },
    metadataTime: {
      control: { type: 'text' },
    },
    callOutType: {
      options: ['none', 'warning', 'alert'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
        },
      },
    },
  },
};

// With image.
export const WithImage: Story = {
  // Props.
  args: {
    title: 'Card title',
    url: 'https://gov.wales',
    description: 'Card description',
    imageSrc:
      'https://gov.wales/sites/default/files/cta-blocks/2022-03/in-focus-ukraine-wales-thumb.jpg',
    imageAlt: 'Image alt',
  },
  argTypes: {
    metadataDate: {
      control: { type: 'text' },
    },
    metadataTime: {
      control: { type: 'text' },
    },
    callOutType: {
      options: ['none', 'warning', 'alert'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
        },
      },
    },
  },
};

// With call out notice.
export const WithCallOut: Story = {
  // Props.
  args: {
    title: 'Card title',
    url: 'https://gov.wales',
    callOut: 'Example... Details of this scheduled release have changed',
    callOutType: 'alert',
    metadataDate: '2023-04-21',
    description: 'Card description',
  },
  argTypes: {
    metadataDate: {
      control: { type: 'text' },
    },
    metadataTime: {
      control: { type: 'text' },
    },
    callOutType: {
      options: ['none', 'warning', 'alert'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
        },
      },
    },
  },
};
