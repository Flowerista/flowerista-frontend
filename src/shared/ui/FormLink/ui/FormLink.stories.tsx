import type { Meta, StoryObj } from '@storybook/react';
import { FormLink } from './FormLink.tsx';

const meta = {
  title: 'shared/FormLink',
  component: FormLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof FormLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormLinkBasic: Story = {
  args: {
    text: 'Basic',
    to: ''
  }
};
