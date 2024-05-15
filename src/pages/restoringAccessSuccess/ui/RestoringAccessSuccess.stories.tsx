import type { Meta, StoryObj } from '@storybook/react';
import { RestoringAccessSuccess } from './RestoringAccessSuccess.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { StyleDecorator } from '../../../shared/config/storybook/StyleDecorator/StyleDecorator.tsx';

const meta = {
  title: 'pages/RestoringAccessSuccess',
  component: RestoringAccessSuccess,
  parameters: {
    layout: 'centered'
  },
  decorators: [StyleDecorator, StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof RestoringAccessSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RestoringAccessSuccessBasic: Story = {
  args: {}
};
