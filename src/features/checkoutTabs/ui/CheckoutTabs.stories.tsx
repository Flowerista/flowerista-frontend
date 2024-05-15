import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutTabs } from './CheckoutTabs.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const meta = {
  title: 'features/Checkout/CheckoutTabs',
  component: CheckoutTabs,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    StoreDecorator({}),
    (story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {story()}
      </LocalizationProvider>
    )
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutTabsBased: Story = {
  args: {
    setIsActive: () => {}
  }
};
