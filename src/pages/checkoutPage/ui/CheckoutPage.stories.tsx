import type { Meta, StoryObj } from '@storybook/react';
import CheckoutPage from './CheckoutPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutPageBasic: Story = {
  args: {}
};
