import type { Meta, StoryObj } from '@storybook/react';
import { ProfileContactsForm } from './ProfileContactsForm.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Profile/ProfileContactsForm',
  component: ProfileContactsForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileContactsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileContactsFormHeader: Story = {
  args: {}
};
