import type { Meta, StoryObj } from '@storybook/react';
import { FormError } from './FormError.tsx';

const meta = {
  title: 'shared/FormError',
  component: FormError,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof FormError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithError: Story = {
  args: {
    error: '123'
  }
};
