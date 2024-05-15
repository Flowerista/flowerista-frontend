import type { Meta, StoryObj } from '@storybook/react';
import { Subscribe } from './Subscribe.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Subscribe',
  component: Subscribe,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Subscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscribeBased: Story = {
  args: {}
};
