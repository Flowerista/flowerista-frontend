import type { Meta, StoryObj } from '@storybook/react';
import { CatalogSelectFilter } from './CatalogSelectFilter.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Catalog/CatalogSelectFilter',
  component: CatalogSelectFilter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof CatalogSelectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogSelectFilterBased: Story = {
  args: {
    array: [],
    name: 'flowers',
    removeItem: () => {},
    addItem: () => {},
    items: [
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
};
