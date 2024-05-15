import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button.tsx';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    text: 'Button',
    sizeMode: 'big'
  }
};
export const Small: Story = {
  args: {
    text: 'Button',
    sizeMode: 'small'
  }
};
export const Full: Story = {
  args: {
    text: 'Button',
    sizeMode: 'full'
  }
};
export const ColorModeBlack: Story = {
  args: {
    text: 'Button',
    sizeMode: 'big',
    colorMode: 'black'
  }
};
export const ColorModeWhite: Story = {
  args: {
    text: 'Button',
    sizeMode: 'big',
    colorMode: 'white'
  }
};
export const LoadingTrue: Story = {
  args: {
    text: 'Button',
    sizeMode: 'big',
    loading: true
  }
};
