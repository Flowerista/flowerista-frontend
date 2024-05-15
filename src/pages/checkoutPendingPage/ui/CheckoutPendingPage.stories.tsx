import type { Meta, StoryObj } from '@storybook/react';
import CheckoutPendingPage from './CheckoutPendingPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/CheckoutPendingPage',
  component: CheckoutPendingPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutPendingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutPendingPageBasic: Story = {
  args: {}
};
