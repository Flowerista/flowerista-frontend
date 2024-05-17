import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePersonalInformation } from './ProfilePersonalInformation.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/ProfilePersonalInformation',
  component: ProfilePersonalInformation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    RouterDecorator,
    StoreDecorator({
      user: {
        user: {
          firstName: 'Test',
          lastName: 'Test',
          email: 'Test.com',
          phoneNumber: 55555555,
          address: {
            city: 'Київ',
            street: 'Княгині Ольги',
            house: '14',
            entrance: '1',
            flat: '1'
          }
        }
      }
    })
  ],
  argTypes: {}
} satisfies Meta<typeof ProfilePersonalInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePersonalInformationBasic: Story = {
  args: {}
};
