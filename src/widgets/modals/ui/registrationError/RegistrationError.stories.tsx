import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationError } from './RegistrationError.tsx';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/RegistrationError',
  component: RegistrationError,
  decorators: [RouterDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof RegistrationError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegistrationErrorBasic: Story = {
  args: {
    isOpen: true,
    setOpen: () => {}
  }
};
