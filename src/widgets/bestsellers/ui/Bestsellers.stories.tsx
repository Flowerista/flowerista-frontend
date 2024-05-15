import type { Meta, StoryObj } from '@storybook/react';
import { Bestsellers } from './Bestsellers.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/Bestsellers',
  component: Bestsellers,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${import.meta.env.VITE_API_URL}/api/bouquete/bs`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: 37,
            name: 'Wine Peonies',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973825/kkfigkh5ssjijv7gc7ez.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973834/cjutjllhbxjr26bfkhpt.jpg'
            },
            defaultPrice: 22,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 110,
                size: 'SMALL',
                defaultPrice: 17,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 111,
                size: 'MEDIUM',
                defaultPrice: 22,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 112,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 10
          },
          {
            id: 23,
            name: 'Twilight Romance ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
            },
            defaultPrice: 60,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 69,
                size: 'MEDIUM',
                defaultPrice: 60,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 68,
                size: 'SMALL',
                defaultPrice: 48,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 70,
                size: 'LARGE',
                defaultPrice: 65,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 38,
            name: 'Magnetic daffodils',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973903/nnd8zs2wgdj7wvr9xmld.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973908/prenx0izzazmmgynkd4l.jpg'
            },
            defaultPrice: 18,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 115,
                size: 'LARGE',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 113,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 114,
                size: 'MEDIUM',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 36,
            name: 'Coastal Breeze',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973727/ndug4k4qdidvjmahk37f.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973733/ul1bm1vyn1zzaf7ifzkc.jpg'
            },
            defaultPrice: 30,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 109,
                size: 'LARGE',
                defaultPrice: 35,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 107,
                size: 'SMALL',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 108,
                size: 'MEDIUM',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 10,
            name: 'Royal Regalia ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973578/yhxu1ais7r9dcxhoxdxi.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973587/vuez2oofjhiim0ch7m2q.jpg'
            },
            defaultPrice: 18,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 30,
                size: 'MEDIUM',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 31,
                size: 'LARGE',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 29,
                size: 'SMALL',
                defaultPrice: 14,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          }
        ]
      }
    ]
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Bestsellers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BestsellersBased: Story = {
  args: {}
};
