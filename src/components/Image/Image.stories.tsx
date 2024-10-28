import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import Image from './Image';

// Storybook Meta.
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

// Variants
export const Default: Story = {
  // Props.
  args: {
    src: '/assets/favicon/touch-icon-192.png',
    alt: 'Welsh Government',
  },
  argTypes: {
    percentage: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },
  },
};

// Setting the width and height via pixels
export const FixedWidthAndHeight: Story = {
  // Props.
  args: {
    src: '/assets/favicon/touch-icon-192.png',
    alt: 'Welsh Government',
    width: 100,
    height: 100,
  },
  argTypes: {
    percentage: {
      control: false,
    },
  },
};

// Setting the width and height via percentage
export const PercentageWidthAndHeight: Story = {
  // Props.
  args: {
    src: '/assets/favicon/touch-icon-192.png',
    alt: 'Welsh Government',
    width: 100,
    height: 100,
    percentage: true,
  },
};
