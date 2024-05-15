import type { Meta, StoryObj } from '@storybook/react';
import { MobileFilters } from './MobileFilters.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { createRef } from 'react';

const meta = {
  title: 'entities/Catalog/MobileFilters',
  component: MobileFilters,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof MobileFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobileFiltersBased: Story = {
  args: {
    min: 10,
    max: 20,
    isOpen: true,
    setIsOpen: () => {},
    maxInputRef: createRef<HTMLInputElement>(),
    minInputRef: createRef<HTMLInputElement>()
  }
};
