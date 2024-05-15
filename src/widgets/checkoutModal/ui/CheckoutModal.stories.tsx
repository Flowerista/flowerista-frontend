import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutModal } from './CheckoutModal.tsx';

const meta = {
  title: 'widgets/CheckoutModal',
  component: CheckoutModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckoutModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckoutModalBased: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {}
  }
};
