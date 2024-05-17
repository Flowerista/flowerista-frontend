import type { Meta, StoryObj } from '@storybook/react';
import { Sale } from './Sale.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/Sale',
  component: Sale,
  parameters: {
    layout: 'centered',
    mockData: [storybookMockData.getTs(), storybookMockData.getUserWishlist()]
  },
  tags: ['autodocs'],

  decorators: [StoreDecorator({}), RouterDecorator],
  argTypes: {}
} satisfies Meta<typeof Sale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaleBasicLoading: Story = {};
