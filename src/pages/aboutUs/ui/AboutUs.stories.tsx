import type { Meta, StoryObj } from '@storybook/react';
import AboutUs from './AboutUs.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/AboutUs',
  component: AboutUs,
  decorators: [RouterDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AboutUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutUsBasic: Story = {
  args: {}
};
