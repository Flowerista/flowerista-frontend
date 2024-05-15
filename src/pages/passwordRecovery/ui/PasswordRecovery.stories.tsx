import type { Meta, StoryObj } from '@storybook/react';
import PasswordRecovery from './PasswordRecovery.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/PasswordRecovery',
  component: PasswordRecovery,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PasswordRecovery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordRecoveryBasic: Story = {
  args: {}
};
