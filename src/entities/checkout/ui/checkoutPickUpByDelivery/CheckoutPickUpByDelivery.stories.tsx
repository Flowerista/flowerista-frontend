import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutPickUpByDelivery } from './CheckoutPickUpByDelivery.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const meta = {
  title: 'entities/Checkout/CheckoutPickUpByDelivery',
  component: CheckoutPickUpByDelivery,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
    (story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {story()}
      </LocalizationProvider>
    )
  ],
  argTypes: {}
} satisfies Meta<typeof CheckoutPickUpByDelivery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutPickUpByDeliveryBased: Story = {
  args: {
    setIsActive: () => {}
  }
};
