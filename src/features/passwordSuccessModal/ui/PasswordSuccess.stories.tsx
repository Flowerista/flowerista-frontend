import type { Meta, StoryObj } from '@storybook/react';
import { PasswordSuccessModal } from './PasswordSuccess.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/PasswordSuccessModal',
  component: PasswordSuccessModal,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PasswordSuccessModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordSuccessBased: Story = {
  args: {
    isOpen: true,
    setOpen: () => {}
  }
};
