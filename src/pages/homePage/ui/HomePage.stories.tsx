import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'centered',
    mockData: [
      storybookMockData.getBs(),
      storybookMockData.getTs(),
      storybookMockData.getUserWishlist()
    ]
  },
  decorators: [StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePageBasic: Story = {
  args: {}
};
