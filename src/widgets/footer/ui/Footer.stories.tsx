import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer } from './Footer.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      user: {
        user: {
          email: '123'
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
