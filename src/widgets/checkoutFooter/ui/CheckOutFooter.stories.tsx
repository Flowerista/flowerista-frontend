import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutFooter } from './CheckOutFooter.tsx';

const meta = {
  title: 'widgets/CheckOutFooter',
  component: CheckOutFooter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckOutFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckOutFooterBased: Story = {
  args: {}
};
