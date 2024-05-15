import type { Preview } from '@storybook/react';
import { SuspenseDecorator } from '../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { I18nextDecorator } from '../src/shared/config/storybook/I18nextDecorator/I18nextDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    SuspenseDecorator,
    RouterDecorator,
    StyleDecorator,
    I18nextDecorator
  ]
};
export default preview;
