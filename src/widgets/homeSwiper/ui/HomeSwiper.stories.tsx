import type { Meta, StoryObj } from '@storybook/react';
import { HomeSwiper } from './HomeSwiper.tsx';

const meta = {
  title: 'widgets/HomeSwiper',
  component: HomeSwiper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof HomeSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeSwiperBasic: Story = {};
