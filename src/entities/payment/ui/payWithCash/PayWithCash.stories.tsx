import type { Meta, StoryObj } from '@storybook/react';
import { PayWithCash } from './PayWithCash.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'entities/payment/PayWithCash',
  component: PayWithCash,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof PayWithCash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PayWithCashBased: Story = {
  args: {}
};
