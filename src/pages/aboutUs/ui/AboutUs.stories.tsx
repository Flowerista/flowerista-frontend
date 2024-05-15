import type { Meta, StoryObj } from '@storybook/react';
import AboutUs from './AboutUs.tsx';

const meta = {
  title: 'pages/AboutUs',
  component: AboutUs,
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
