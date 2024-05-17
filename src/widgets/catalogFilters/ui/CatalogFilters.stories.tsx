import type { Meta, StoryObj } from '@storybook/react';
import { CatalogFilters } from './CatalogFilters.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';

const meta = {
  title: 'widgets/CatalogFilters',
  component: CatalogFilters,
  parameters: {
    layout: 'centered',
    mockData: [
      storybookMockData.getPriceRange(),
      storybookMockData.getFlowerApi(),
      storybookMockData.getColorApi()
    ]
  },

  decorators: [
    StoreDecorator({
      filtration: {
        sorting: [
          {
            item: 'sort',
            id: 12,
            sort: false
          },
          {
            item: 'sortByNewest',
            id: 123,
            sort: false
          },
          {
            item: 'sortByPriceHighToLow',
            id: 121,
            sort: false
          }
        ],
        filters: {
          max: 50,
          colorIds: [],
          min: 10,
          flowerIds: [],
          maxPrice: 50,
          page: 1,
          minPrice: 10
        }
      }
    })
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CatalogFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogFiltersBased: Story = {
  args: {}
};
