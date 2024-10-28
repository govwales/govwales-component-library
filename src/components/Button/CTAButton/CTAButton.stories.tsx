import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import CTAButton from './CTAButton';

// Storybook Meta.
const meta: Meta<typeof CTAButton> = {
  title: 'Components/Buttons/CTA Button',
  id: 'gw-cta-btn',
  component: CTAButton,
  argTypes: {
    backgroundColourHex: {
      control: { type: 'color' },
    },
    backgroundColourHoverHex: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    children: 'Default button',
    as: 'button',
  },
};

export const AsLink: Story = {
  args: {
    children: 'HTML link semantics',
    as: 'link',
    href: '#',
  },
};
