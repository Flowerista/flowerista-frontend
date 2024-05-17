import type { Meta, StoryObj } from '@storybook/react';
import { Bestsellers } from './Bestsellers.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/Bestsellers',
  component: Bestsellers,
  parameters: {
    layout: 'centered',
    mockData: [storybookMockData.getBs(), storybookMockData.getUserWishlist()]
  },
  decorators: [StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Bestsellers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BestsellersBased: Story = {
  args: {}
};
