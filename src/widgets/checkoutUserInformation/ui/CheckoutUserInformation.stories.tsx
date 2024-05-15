import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutUserInformation } from './CheckoutUserInformation.tsx';

const meta = {
  title: 'widgets/CheckoutUserInformation',
  component: CheckoutUserInformation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutUserInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutUserInformationBased: Story = {
  args: {
    user: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
      phoneNumber: 456578433,
      address: {
        city: 'Київ',
        street: 'Княгині Ольги',
        house: '14',
        entrance: '1',
        flat: '1'
      }
    },
    setVisible: () => {}
  }
};
