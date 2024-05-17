import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationCompleted } from './RegistrationCompleted.tsx';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/RegistrationCompleted',
  decorators: [RouterDecorator],
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
