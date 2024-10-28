import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import ErrorMessage from './ErrorMessage';

// Storybook Meta.
const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/Error Message',
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

// Variants
export const Default: Story = {
  // Props.
  args: {
    errorMessage: 'Error message',
  },
};
