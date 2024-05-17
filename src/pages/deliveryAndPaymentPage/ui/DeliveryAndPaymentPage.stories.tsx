import type { Meta, StoryObj } from '@storybook/react';
import DeliveryAndPaymentPage from './DeliveryAndPaymentPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/DeliveryAndPaymentPage',
  component: DeliveryAndPaymentPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof DeliveryAndPaymentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryAndPaymentPageBasic: Story = {
  args: {}
};
