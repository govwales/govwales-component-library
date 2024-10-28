import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import CallOut from './CallOut';

// Storybook Meta.
const meta: Meta<typeof CallOut> = {
  title: 'Components/CallOut',
  component: CallOut,
};

export default meta;
type Story = StoryObj<typeof CallOut>;

// Variants
export const Information: Story = {
  // Props.
  args: {
    text: 'Call out description',
  },
  argTypes: {
    type: {
      control: false,
    },
    size: {
      control: false,
    },
  },
};

export const Warning: Story = {
  // Props.
  args: {
    text: 'Call out description',
    type: 'warning',
  },
  argTypes: {
    type: {
      options: ['none', 'warning', 'alert', 'positive'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
          positive: 'Positive',
        },
      },
    },
    size: {
      control: false,
    },
  },
};

export const Alert: Story = {
  // Props.
  args: {
    text: 'Call out description',
    type: 'alert',
  },
  argTypes: {
    type: {
      options: ['none', 'warning', 'alert', 'positive'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
          positive: 'Positive',
        },
      },
    },
    size: {
      options: ['none', 'sm'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          sm: 'Small',
        },
      },
    },
  },
};

export const AlertSmall: Story = {
  // Props.
  args: {
    text: 'Call out description',
    type: 'alert',
    size: 'sm',
  },
  argTypes: {
    type: {
      options: ['none', 'warning', 'alert', 'positive'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
          positive: 'Positive',
        },
      },
    },
    size: {
      options: ['none', 'sm'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          sm: 'Small',
        },
      },
    },
  },
};

export const Positive: Story = {
  // Props.
  args: {
    text: 'Call out description',
    type: 'positive',
  },
  argTypes: {
    type: {
      options: ['none', 'warning', 'alert', 'positive'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          warning: 'Warning',
          alert: 'Alert',
          positive: 'Positive',
        },
      },
    },
    size: {
      options: ['none', 'sm'],
      control: {
        type: 'select',
        labels: {
          none: 'Default',
          sm: 'Small',
        },
      },
    },
  },
};
