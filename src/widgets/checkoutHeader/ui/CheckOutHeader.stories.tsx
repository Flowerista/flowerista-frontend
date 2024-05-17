import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutHeader } from './CheckOutHeader.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/CheckOutHeader',
  component: CheckOutHeader,
  decorators: [RouterDecorator],
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
