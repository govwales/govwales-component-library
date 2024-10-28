import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import SocialMediaLink from './SocialMediaLink';

// Storybook Meta.
const meta: Meta<typeof SocialMediaLink> = {
  title: 'Components/Link/Social media',
  id: 'gw-link-social-media',
  component: SocialMediaLink,
};

export default meta;
type Story = StoryObj<typeof SocialMediaLink>;

export const Facebook: Story = {
  args: {
    platform: 'facebook',
    href: '#',
    title: 'Facebook',
  },
};

export const Instagram: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='instagram'
        href='#'
        title='Instagram'
      />
    );
  },
};

export const Linkedin: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform={'linkedin'}
        href='#'
        title='LinkedIn'
      />
    );
  },
};

// Pinterest platform.
export const Pinterest: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='pinterest'
        href='#'
        title='Pinterest'
      />
    );
  },
};

// YouTube platform.
export const Youtube: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='youtube'
        href='#'
        title='YouTube'
      />
    );
  },
};

// Flickr platform.
export const Flickr: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='flickr'
        href='#'
        title='Flickr'
      />
    );
  },
};

// X platform.
export const X: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return <SocialMediaLink locale={locale} platform='x' href='#' title='X' />;
  },
};

// Email.
export const Email: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='email'
        href='#'
        title='Email'
      />
    );
  },
};

// Newsletter.
export const Newsletter: Story = {
  render: (_args: any, { globals: { locale } }) => {
    return (
      <SocialMediaLink
        locale={locale}
        platform='newsletter'
        href='#'
        title='Newsletter'
      />
    );
  },
};
