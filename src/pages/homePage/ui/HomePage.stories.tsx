import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePageBasic: Story = {
  args: {}
};
