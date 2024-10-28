import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SecondaryButton from './SecondaryButton';

// Storybook Meta.
const meta: Meta<typeof SecondaryButton> = {
  title: 'Components/Buttons/Secondary Button',
  id: 'gw-secondary-btn',
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    children: 'Secondary button',
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

export const ClearAll: Story = {
  args: {
    children: 'Clear all',
    colour: 'red',
    size: 'sm',
  },
};

export const SignIn: Story = {
  args: {
    children: 'Sign In',
    size: 'sm',
    as: 'link',
  },
};

export const GoTo: Story = {
  args: {
    children: 'Go to current site',
    size: 'sm',
    colour: 'black',
    as: 'link',
  },
};

export const AcceptAllCookies: Story = {
  args: {
    children: 'Accept all cookies',
    size: 'sm',
  },
};
