import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SiteSearch from './SiteSearch';

// Storybook Meta.
const meta: Meta<typeof SiteSearch> = {
  title: 'Components/Site Search',
  component: SiteSearch,
};

export default meta;
type Story = StoryObj<typeof SiteSearch>;

const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`Form submit example`);
};

// Variants
export const PlacementInHeader: Story = {
  args: {
    searchButtonLabel: 'Search website',
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
    },
    formHandleSubmit: formSubmit,
  },
};

export const PlacementInHeaderWithPlaceholder: Story = {
  args: {
    searchButtonLabel: 'Search website',
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
      placeholder: 'Enter a keyword',
    },
    formHandleSubmit: formSubmit,
  },
};

export const PlacementInHeaderWithValue: Story = {
  args: {
    searchButtonLabel: 'Search website',
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
      value: 'Wales',
    },
    formHandleSubmit: formSubmit,
  },
};

export const PlacementInContent: Story = {
  args: {
    searchButtonLabel: 'Search website',
    header: false,
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
    },
    formHandleSubmit: formSubmit,
  },
};

export const PlacementInContentWithPlaceholder: Story = {
  args: {
    searchButtonLabel: 'Search website',
    header: false,
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
      placeholder: 'Enter a keyword',
    },
    formHandleSubmit: formSubmit,
  },
};

export const PlacementInContentWithValue: Story = {
  args: {
    searchButtonLabel: 'Search website',
    header: false,
    textInput: {
      id: 'gw-site-search-input',
      name: 'globalkeywords',
      label: 'Search',
      value: 'Wales',
    },
    formHandleSubmit: formSubmit,
  },
};
