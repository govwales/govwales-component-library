import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import PageHeader from './PageHeader';

// Storybook Meta.
const meta: Meta<typeof PageHeader> = {
  title: 'Components/Page Header',
  id: 'gw-page-header',
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <PageHeader heading={'Heading'} />;
  },
};

export const WithSubheading: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <PageHeader heading={'Heading'} subHeading='Subheading' />;
  },
};

export const WithBorder: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <PageHeader heading={'Heading'} border={true} />;
  },
};

export const WithSubheadingAndBorder: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <PageHeader heading={'Heading'} subHeading='Subheading' border={true} />
    );
  },
};

export const WithAbbrElements: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <PageHeader
        heading={
          'Heading with Abbreviation element: <abbr title="Freedom of information">FOI</abbr>'
        }
        subHeading='Subheading with Abbreviation element: <abbr title="Freedom of information">FOI</abbr>'
        border={true}
      />
    );
  },
};

export const WithSupElements: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <PageHeader
        heading={'Heading with superscript element: <sup>&#174;</sup>'}
        subHeading='Subheading with superscript element: <sup>&#174;</sup>'
        border={true}
      />
    );
  },
};

export const WithSubElements: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <PageHeader
        heading={'Heading with subscript element: O<sub>2</sub>'}
        subHeading='Subheading with subscript element: O<sub>2</sub>'
        border={true}
      />
    );
  },
};

export const WithSpanElements: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <PageHeader
        heading={'Heading with span element: <span>Span</sub>'}
        subHeading='Subheading with span element: <span>Span</span>'
        border={true}
      />
    );
  },
};
