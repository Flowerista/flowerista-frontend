import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer } from './Footer.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    RouterDecorator,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterBasic: Story = {};
