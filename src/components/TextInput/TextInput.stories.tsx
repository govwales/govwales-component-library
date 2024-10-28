import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import TextInput from './TextInput';

// Storybook Meta.
const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    docs: {
      source: {
        transform: code => {
          code = code.substring(1);
          code = code.replace('render: () => ', '');
          code = code.slice(0, -1);
          return code;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// OnChange example
const InputOnChange = (e: React.FormEvent<HTMLFormElement>) => {
  console.log((e.target as HTMLInputElement).value);
};

// Variants
export const Default: Story = {
  // Props.
  args: {
    label: 'Label',
    id: 'input-id',
    name: 'input-name',
    type: 'text',
    size: 10,
    maxLength: 10,
    required: false,
    description: 'Description',
    hint: 'Hint',
    fluidWidth: 50,
    fixedWidth: 10,
  },
};

export const TextInputWithLargeLabel: Story = {
  // Props.
  args: {
    label: 'Label',
    id: 'input-id',
    name: 'input-name',
    type: 'text',
    size: 10,
    maxLength: 10,
    required: false,
    description: 'Description',
    hint: 'Hint',
    fluidWidth: 50,
    fixedWidth: 10,
    labelSize: 'lg',
  },
};

export const TextInputWithVisiblyHiddenLabel: Story = {
  // Props.
  args: {
    label: 'Hidden Label',
    labelHidden: true,
    id: 'hidden-label',
    name: 'hidden-label',
    type: 'text',
  },
};

export const TextInputWithErrorMessage: Story = {
  // Props.
  args: {
    label: 'Error message',
    id: 'error-message',
    name: 'error-message',
    type: 'text',
    errorMessage: 'This field is required',
  },
};

export const TextInputForMultipleQuestions: Story = {
  // Props.
  args: {
    label: 'Label',
    id: 'input-id',
    name: 'input-name',
    type: 'text',
    placeholder: 'Placeholder text',
    size: 30,
    maxLength: 128,
    required: false,
    description: 'Description',
    hint: 'Hint',
  },
};

export const TextInputWithOnChangeEvent: Story = {
  // Props.
  args: {
    label: 'On change event',
    id: 'on-change-event',
    name: 'on-change-event',
    type: 'text',
    hint: 'The value will be console logged',
    onChange: InputOnChange,
  },
};

export const TextInputWithFixedWidth: Story = {
  render: () => (
    <>
      <div className='gw-form__row'>
        <TextInput
          label='20 characters'
          name='fixed-20'
          type='text'
          id='fixed-20'
          fixedWidth={20}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='10 characters'
          name='fixed-10'
          type='text'
          id='fixed-10'
          fixedWidth={10}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='5 characters'
          name='fixed-5'
          type='text'
          id='fixed-5'
          fixedWidth={5}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='4 characters'
          name='fixed-4'
          type='text'
          id='fixed-4'
          fixedWidth={4}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='3 characters'
          name='fixed-3'
          type='text'
          id='fixed-3'
          fixedWidth={3}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='2 characters'
          name='fixed-2'
          type='text'
          id='fixed-2'
          fixedWidth={2}
        />
      </div>
    </>
  ),
};

export const TextInputWithFluidWidth: Story = {
  render: () => (
    <>
      <div className='gw-form__row'>
        <TextInput
          label='Three quarters'
          name='fluid-75'
          type='text'
          id='fluid-75'
          fluidWidth={75}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='Two thirds'
          name='fluid-66'
          type='text'
          id='fluid-66'
          fluidWidth={66}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='Half'
          name='fluid-50'
          type='text'
          id='fluid-50'
          fluidWidth={50}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='One third'
          name='fluid-33'
          type='text'
          id='fluid-33'
          fluidWidth={33}
        />
      </div>
      <div className='gw-form__row'>
        <TextInput
          label='One quarter'
          name='fluid-25'
          type='text'
          id='fluid-25'
          fluidWidth={25}
        />
      </div>
    </>
  ),
};
