import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutAddressInformation } from './CheckoutAddressInformation.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Checkout/CheckoutAddressInformation',
  component: CheckoutAddressInformation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof CheckoutAddressInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutAddressInformationBased: Story = {
  args: {
    isOpen: true,
    setOpen: () => {},
    showNext: () => {}
  }
};
