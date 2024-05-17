import type { Meta, StoryObj } from '@storybook/react';
import { PayWithPayPal } from './PayWithPayPal.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'entities/payment/PayWithPayPal',
  component: PayWithPayPal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
    (story) => (
      <PayPalScriptProvider
        options={{
          clientId: `test`,
          currency: 'USD',
          intent: 'capture'
        }}
      >
        {story()}
      </PayPalScriptProvider>
    ),
    RouterDecorator
  ],
  argTypes: {}
} satisfies Meta<typeof PayWithPayPal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PayWithPayPalBased: Story = {
  args: {}
};
