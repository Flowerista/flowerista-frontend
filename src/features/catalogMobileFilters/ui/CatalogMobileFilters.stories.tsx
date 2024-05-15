import type { Meta, StoryObj } from '@storybook/react';
import { CatalogMobileFilters } from './CatalogMobileFilters.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { createRef } from 'react';

const meta = {
  title: 'features/Catalog/CatalogMobileFilters',
  component: CatalogMobileFilters,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof CatalogMobileFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogMobileFiltersBased: Story = {
  args: {
    max: 50,
    min: 10,
    minInputRef: createRef<HTMLInputElement>(),
    maxInputRef: createRef<HTMLInputElement>()
  }
};
