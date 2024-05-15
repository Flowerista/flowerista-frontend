import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader.tsx';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderBasic: Story = {
  args: {}
};
