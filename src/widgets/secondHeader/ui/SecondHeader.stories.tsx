import type { Meta, StoryObj } from '@storybook/react';
import { SecondHeader } from './SecondHeader.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/SecondHeader',
  component: SecondHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof SecondHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondHeaderBased: Story = {};
