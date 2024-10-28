import { Preview } from '@storybook/react';
import govwalesTheme from './theme';

// Global SCSS.
import '../src/scss/_govwales-global.scss';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetic',
        order: [
          'Components',
          [
            'Breadcrumbs',
            'Buttons',
            ['Primary Button', 'Secondary Button', 'CTA Button'],
          ],
        ],
      },
    },
    docs: {
      theme: govwalesTheme,
    },
  },
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', title: 'English' },
          { value: 'cy', right: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', title: 'Cymraeg' },
        ],
      },
    },
  },
};

export default preview;
