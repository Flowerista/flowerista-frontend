import type { Meta, StoryObj } from '@storybook/react';
import Registration from './Registration.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { StyleDecorator } from '../../../shared/config/storybook/StyleDecorator/StyleDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/Registration',
  component: Registration,
  parameters: {
    layout: 'centered'
  },
  decorators: [StyleDecorator, StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegistrationBasic: Story = {
  args: {}
};
