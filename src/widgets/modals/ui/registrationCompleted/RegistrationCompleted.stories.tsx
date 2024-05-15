import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationCompleted } from './RegistrationCompleted.tsx';

const meta = {
  title: 'widgets/RegistrationCompleted',
  component: RegistrationCompleted,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof RegistrationCompleted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegistrationCompletedBasic: Story = {
  args: {
    isOpen: true,
    setOpen: () => {}
  }
};
