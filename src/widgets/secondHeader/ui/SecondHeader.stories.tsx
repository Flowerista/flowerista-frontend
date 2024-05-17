import type { Meta, StoryObj } from '@storybook/react';
import { SecondHeader } from './SecondHeader.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/SecondHeader',
  component: SecondHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  decorators: [StoreDecorator({}), RouterDecorator],
  argTypes: {}
} satisfies Meta<typeof SecondHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondHeaderBased: Story = {};
