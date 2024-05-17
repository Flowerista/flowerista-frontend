import type { Meta, StoryObj } from '@storybook/react';
import { PayWithCash } from './PayWithCash.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'entities/payment/PayWithCash',
  component: PayWithCash,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({}), RouterDecorator],
  argTypes: {}
} satisfies Meta<typeof PayWithCash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PayWithCashBased: Story = {
  args: {}
};
