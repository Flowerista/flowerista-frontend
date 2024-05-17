import type { Meta, StoryObj } from '@storybook/react';
import RestoringAccess from './RestoringAccess.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { StyleDecorator } from '../../../shared/config/storybook/StyleDecorator/StyleDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/RestoringAccess',
  component: RestoringAccess,
  parameters: {
    layout: 'centered'
  },
  decorators: [StyleDecorator, StoreDecorator({}), RouterDecorator],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof RestoringAccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RestoringAccessBasic: Story = {
  args: {}
};
