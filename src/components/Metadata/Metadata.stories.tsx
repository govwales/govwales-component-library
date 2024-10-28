import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import Metadata from './Metadata';

// Storybook Meta.
const meta: Meta<typeof Metadata> = {
  title: 'Components/Metadata',
  id: 'gw-site-header',
  component: Metadata,
};

export default meta;
type Story = StoryObj<typeof Metadata>;

// Variants.
// Metadata item.
export const Default: Story = {
  // Props.
  args: {
    label: 'Label',
  },
  argTypes: {
    type: {
      options: ['None', 'Type', 'Status', 'Topic', 'Organisation'],
      control: {
        type: 'select',
        labels: {
          None: '',
          Type: 'Type',
          Status: 'Status',
          Topic: 'Topic',
          Organisation: 'Organisation',
        },
      },
    },
    date: {
      control: false,
    },
    time: {
      control: false,
    },
  },
};

// Variants.
// Metadata date and time.
export const DateAndTime: Story = {
  // Props.
  args: {
    date: '2023-04-21',
    time: '09:00',
  },
  argTypes: {
    label: {
      control: false,
    },
    type: {
      control: false,
    },
  },
};
