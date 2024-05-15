import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title.tsx';

const meta = {
  title: 'shared/Title',
  component: Title,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonCardBasic: Story = {
  args: {
    text: '123'
  }
};
