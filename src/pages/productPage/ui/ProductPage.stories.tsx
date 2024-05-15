import type { Meta, StoryObj } from '@storybook/react';
import ProductPage from './ProductPage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'pages/ProductPage',
  component: ProductPage,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${import.meta.env.VITE_API_URL}/api/bouquete/34`,
        method: 'GET',
        status: 200,
        response: {
          id: 34,
          name: 'Berry Bliss',
          itemCode: 'BQ034',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973491/psnkvmw2edlphoorhepc.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973497/laoy03sfobgsn3ttugdz.jpg'
          },
          sizes: [
            {
              id: 102,
              size: 'MEDIUM',
              defaultPrice: 30,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 101,
              size: 'SMALL',
              defaultPrice: 28,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 103,
              size: 'LARGE',
              defaultPrice: 32,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          flowers: [
            {
              id: 34,
              name: 'Gerbera'
            },
            {
              id: 20,
              name: 'Rose'
            }
          ],
          stockQuantity: 10
        }
      }
    ]
  },
  decorators: [
    StoreDecorator({
      recentlyViewed: {
        recentlyViewed: []
      }
    })
  ],
  tags: ['autodocs']
} satisfies Meta<typeof ProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductPageBasic: Story = {
  args: {}
};
