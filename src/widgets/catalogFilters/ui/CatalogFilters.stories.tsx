import type { Meta, StoryObj } from '@storybook/react';
import { CatalogFilters } from './CatalogFilters.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/CatalogFilters',
  component: CatalogFilters,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${import.meta.env.VITE_API_URL}/api/color`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: 1,
            name: 'White'
          },
          {
            id: 2,
            name: 'Blue'
          },
          {
            id: 3,
            name: 'Yellow'
          },
          {
            id: 4,
            name: 'Green'
          },
          {
            id: 5,
            name: 'Brown'
          },
          {
            id: 6,
            name: 'Mix'
          },
          {
            id: 7,
            name: 'Orange'
          },
          {
            id: 8,
            name: 'Pink'
          },
          {
            id: 9,
            name: 'Violet'
          },
          {
            id: 10,
            name: 'Red'
          }
        ]
      },
      {
        url: `${import.meta.env.VITE_API_URL}/api/flower`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: 1,
            name: 'Alstroemeria'
          },
          {
            id: 2,
            name: 'Hydrangea '
          },
          {
            id: 3,
            name: 'Carnation'
          },
          {
            id: 5,
            name: 'Eustoma'
          },
          {
            id: 7,
            name: 'Lily'
          },
          {
            id: 8,
            name: 'Matiola'
          },
          {
            id: 20,
            name: 'Rose'
          },
          {
            id: 6,
            name: 'Ranunculus'
          },
          {
            id: 21,
            name: 'Tulip'
          },
          {
            id: 4,
            name: 'Gypsophila'
          },
          {
            id: 22,
            name: 'Anemone'
          },
          {
            id: 23,
            name: 'Poppy'
          },
          {
            id: 24,
            name: 'Genista'
          },
          {
            id: 25,
            name: 'Eucalyptus'
          },
          {
            id: 26,
            name: 'Fern'
          },
          {
            id: 27,
            name: 'Protea'
          },
          {
            id: 28,
            name: 'Magnolia'
          },
          {
            id: 29,
            name: 'Peony'
          },
          {
            id: 30,
            name: 'Cottonweed'
          },
          {
            id: 31,
            name: 'Mimosa'
          },
          {
            id: 32,
            name: 'Dahlia'
          },
          {
            id: 33,
            name: 'Chamomile'
          },
          {
            id: 34,
            name: 'Gerbera'
          },
          {
            id: 35,
            name: 'Daffodils'
          }
        ]
      }
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
