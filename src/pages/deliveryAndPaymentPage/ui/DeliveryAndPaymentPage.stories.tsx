import type { Meta, StoryObj } from '@storybook/react';
import DeliveryAndPaymentPage from './DeliveryAndPaymentPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/DeliveryAndPaymentPage',
  component: DeliveryAndPaymentPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof DeliveryAndPaymentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryAndPaymentPageBasic: Story = {
  args: {}
};
