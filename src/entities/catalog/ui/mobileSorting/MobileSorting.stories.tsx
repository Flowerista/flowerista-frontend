import type { Meta, StoryObj } from '@storybook/react';
import { MobileSorting } from './MobileSorting.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'entities/Catalog/MobileSorting',
  component: MobileSorting,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof MobileSorting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobileSortingBased: Story = {
  args: {
    handleClose: () => {},
    isVisible: true
  }
};
