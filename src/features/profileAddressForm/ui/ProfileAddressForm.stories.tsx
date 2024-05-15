import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAddressForm } from './ProfileAddressForm.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Profile/ProfileAddressForm',
  component: ProfileAddressForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileAddressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileAddressFormBased: Story = {
  args: {}
};
