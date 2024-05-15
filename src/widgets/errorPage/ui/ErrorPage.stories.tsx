import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage.tsx';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPageBased: Story = {
  args: {}
};
