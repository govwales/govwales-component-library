import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import PrimaryButton from './PrimaryButton';

// Storybook Meta.
const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Buttons/Primary Button',
  id: 'gw-primary-btn',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    children: 'Default button',
    as: 'button',
  },
};

export const AsLink: Story = {
  args: {
    children: 'HTML link semantic',
    as: 'link',
    role: 'button',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const IconOnly: Story = {
  args: {
    children: 'Text is hidden',
    as: 'button',
    icon: 'search',
    iconOnly: true,
    colour: 'red',
  },
};

export const Launcher: Story = {
  args: {
    children: 'Start now',
    as: 'button',
    icon: 'chevron-right',
    iconPosition: 'right',
    colour: 'green',
  },
};

export const Submit: Story = {
  args: {
    children: 'Submit',
    as: 'button',
    colour: 'red',
    type: 'submit',
  },
};

export const SearchForInput: Story = {
  args: {
    children: 'Search',
    as: 'button',
    icon: 'search',
    iconPosition: 'right',
  },
};

export const Previous: Story = {
  args: {
    children: 'Previous',
    as: 'button',
    icon: 'chevron-left',
    iconPosition: 'left',
    colour: 'black',
  },
};

export const Next: Story = {
  args: {
    children: 'Next',
    as: 'button',
    icon: 'chevron-right',
    colour: 'black',
  },
};
