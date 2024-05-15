import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      user: {
        user: {
          address: {
            city: '',
            street: '',
            house: '',
            flat: '',
            entrance: ''
          },
          email: 'test',
          firstName: 'John',
          lastName: 'Smith',
          phoneNumber: 123123213
        }
      }
    })
  ],
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderBasic: Story = {
  args: {}
};
