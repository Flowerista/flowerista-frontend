import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutPickUpFromTheStore } from './CheckoutPickUpFromTheStore.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const meta = {
  title: 'entities/Checkout/CheckoutPickUpFromTheStore',
  component: CheckoutPickUpFromTheStore,
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
} satisfies Meta<typeof CheckoutPickUpFromTheStore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutPickUpFromTheStoreBased: Story = {
  args: {
    setIsActive: () => {}
  }
};
