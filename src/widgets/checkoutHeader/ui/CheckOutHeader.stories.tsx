import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutHeader } from './CheckOutHeader.tsx';

const meta = {
  title: 'widgets/CheckOutHeader',
  component: CheckOutHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckOutHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckOutHeaderBased: Story = {
  args: {}
};
