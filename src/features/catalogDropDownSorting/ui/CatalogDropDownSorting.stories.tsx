import type { Meta, StoryObj } from '@storybook/react';
import { CatalogDropDownSorting } from './CatalogDropDownSorting.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Catalog/CatalogDropDownSorting',
  component: CatalogDropDownSorting,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof CatalogDropDownSorting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogMobileFiltersBased: Story = {
  args: {}
};
