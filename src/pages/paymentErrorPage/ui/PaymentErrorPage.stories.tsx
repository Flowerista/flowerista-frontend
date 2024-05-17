import type { Meta, StoryObj } from '@storybook/react';
import { PaymentErrorPage } from './PaymentErrorPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/PaymentErrorPage',
  component: PaymentErrorPage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PaymentErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentErrorPageBasic: Story = {
  args: {}
};
