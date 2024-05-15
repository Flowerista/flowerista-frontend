import type { Meta, StoryObj } from '@storybook/react';
import { Reviews } from './Reviews.tsx';

const meta = {
  title: 'widgets/Reviews',
  component: Reviews,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewsBasic: Story = {
  args: {}
};
