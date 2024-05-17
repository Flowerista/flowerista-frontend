import type { Meta, StoryObj } from '@storybook/react';
import CatalogPage from './CatalogPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/CatalogPage',
  component: CatalogPage,
  parameters: {
    layout: 'centered',
    mockData: [
      storybookMockData.getColorApi(),
      storybookMockData.getFlowerApi(),
      storybookMockData.getAllFlowerCatalogPageApi(),
      storybookMockData.getPriceRange(),
      storybookMockData.getUserWishlist()
    ]
  },
  decorators: [
    RouterDecorator,
    StoreDecorator({
      filtration: {
        filters: {
          max: 60,
          min: 13,
          flowerIds: [],
          colorIds: [],
          minPrice: 13,
          maxPrice: 60,
          sortByNewest: false,
          sortByPriceHighToLow: false,
          sortByPriceLowToHigh: false,
          page: 1
        },
        sorting: [
          {
            item: 'sort',
            id: 122,
            sort: false
          },
          {
            item: 'sortByNewest',
            id: 142,
            sort: false
          },
          {
            item: 'sortByPriceHighToLow',
            id: 112,
            sort: false
          }
        ]
      }
    })
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogPageBasic: Story = {
  args: {}
};
