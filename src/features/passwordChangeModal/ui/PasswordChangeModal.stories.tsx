import type { Meta, StoryObj } from '@storybook/react';
import { PasswordChangeModal } from './PasswordChangeModal.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/PasswordChangeModal',
  component: PasswordChangeModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof PasswordChangeModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordChangeModalBased: Story = {
  args: {
    isOpen: true,
    setOpen: () => {},
    showNext: () => {}
  }
};
