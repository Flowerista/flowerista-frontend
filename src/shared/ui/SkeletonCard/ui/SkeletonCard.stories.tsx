import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonCard } from './SkeletonCard.tsx';

const meta = {
  title: 'shared/SkeletonCard',
  component: SkeletonCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof SkeletonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonCardBasic: Story = {
  args: {}
};
