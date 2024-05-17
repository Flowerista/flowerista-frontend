import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [RouterDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageBasic: Story = {
  args: {}
};
