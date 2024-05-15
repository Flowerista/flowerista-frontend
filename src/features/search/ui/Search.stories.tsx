import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Search',
  component: Search,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHeader: Story = {
  args: {
    type: 'header'
  }
};
export const SearchMobile: Story = {
  args: {
    type: 'menu'
  }
};
