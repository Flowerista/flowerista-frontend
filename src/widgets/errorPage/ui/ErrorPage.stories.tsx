import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  decorators: [RouterDecorator],
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
