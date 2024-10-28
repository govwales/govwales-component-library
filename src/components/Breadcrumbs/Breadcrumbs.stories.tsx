import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';
import Breadcrumb from './Breadcrumb';

// Storybook Meta.
const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const TwoBreadcrumbs: Story = {
  render: (_args: any, { globals: { locale } }) => (
    <Breadcrumbs locale={locale}>
      <Breadcrumb href={'#'} title={'Home'} />
      <Breadcrumb href={'#'} title={'Current page'} current={true} />
    </Breadcrumbs>
  ),
};

export const ThreeBreadcrumbs: Story = {
  render: (_args: any, { globals: { locale } }) => (
    <Breadcrumbs locale={locale}>
      <Breadcrumb href={'#'} title={'Home'} />
      <Breadcrumb href={'#'} title={'Middle page'} />
      <Breadcrumb href={'#'} title={'Current page'} current={true} />
    </Breadcrumbs>
  ),
};
