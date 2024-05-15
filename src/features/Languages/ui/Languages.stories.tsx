import type { Meta, StoryObj } from '@storybook/react';
import { Languages } from './Languages.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Languages',
  component: Languages,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Languages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguagesBased: Story = {
  args: {}
};
