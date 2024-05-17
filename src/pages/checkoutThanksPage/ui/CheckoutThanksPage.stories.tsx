import type { Meta, StoryObj } from '@storybook/react';
import CheckoutThanksPage from './CheckoutThanksPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/CheckoutThanksPage',
  component: CheckoutThanksPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutThanksPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutThanksPageBasic: Story = {
  args: {}
};
