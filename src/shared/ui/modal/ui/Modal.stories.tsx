import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal.tsx';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalBasic: Story = {
  args: {
    children: <div>test</div>,
    isOpen: true,
    onClose: () => {}
  }
};
