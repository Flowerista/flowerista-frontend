import type { Meta, StoryObj } from '@storybook/react';
import { CheckoutModal } from './CheckoutModal.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/CheckoutModal',
  component: CheckoutModal,
  decorators: [RouterDecorator],
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
