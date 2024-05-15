import type { Meta, StoryObj } from '@storybook/react';
import { Sale } from './Sale.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/Sale',
  component: Sale,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `https://floverista-011daa2eb6c3.herokuapp.com/api/bouquete/ts`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: 7,
            name: 'Vintage Romance ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973216/vhzcjxx5dk6m7ql2x9cj.jpg'
            },
            defaultPrice: 30,
            discount: 20,
            discountPrice: 24,
            sizes: [
              {
                id: 20,
                size: 'SMALL',
                defaultPrice: 25,
                isSale: true,
                discount: 20,
                discountPrice: 20
              },
              {
                id: 22,
                size: 'LARGE',
                defaultPrice: 40,
                isSale: true,
                discount: 20,
                discountPrice: 32
              },
              {
                id: 21,
                size: 'MEDIUM',
                defaultPrice: 30,
                isSale: true,
                discount: 20,
                discountPrice: 24
              }
            ],
            stockQuantity: 15
          },
          {
            id: 39,
            name: 'White Peonies',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974186/hme1kjbcrp5jupzua2ug.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974194/cfazfylxre2159rfnqev.jpg'
            },
            defaultPrice: 22,
            discount: 20,
            discountPrice: 18,
            sizes: [
              {
                id: 117,
                size: 'MEDIUM',
                defaultPrice: 22,
                isSale: true,
                discount: 20,
                discountPrice: 18
              },
              {
                id: 116,
                size: 'SMALL',
                defaultPrice: 17,
                isSale: true,
                discount: 20,
                discountPrice: 14
              },
              {
                id: 118,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: true,
                discount: 20,
                discountPrice: 20
              }
            ],
            stockQuantity: 20
          },
          {
            id: 43,
            name: 'Crystal Clear',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713977175/xyw36y3hqdb95cevvpye.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713977189/h1p4ilby10amhr9itl3g.jpg'
            },
            defaultPrice: 18,
            discount: 20,
            discountPrice: 14,
            sizes: [
              {
                id: 129,
                size: 'MEDIUM',
                defaultPrice: 18,
                isSale: true,
                discount: 20,
                discountPrice: 14
              },
              {
                id: 128,
                size: 'SMALL',
                defaultPrice: 15,
                isSale: true,
                discount: 20,
                discountPrice: 12
              },
              {
                id: 130,
                size: 'LARGE',
                defaultPrice: 20,
                isSale: true,
                discount: 20,
                discountPrice: 16
              }
            ],
            stockQuantity: 10
          },
          {
            id: 1,
            name: 'Autumn Love',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713627941/xi261fan2o5qrsecj0mn.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713627952/r5p4xak3qfbrkra9lfug.jpg'
            },
            defaultPrice: 16,
            discount: 20,
            discountPrice: 13,
            sizes: [
              {
                id: 4,
                size: 'LARGE',
                defaultPrice: 21,
                isSale: true,
                discount: 20,
                discountPrice: 17
              },
              {
                id: 2,
                size: 'SMALL',
                defaultPrice: 14,
                isSale: true,
                discount: 20,
                discountPrice: 11
              },
              {
                id: 3,
                size: 'MEDIUM',
                defaultPrice: 16,
                isSale: true,
                discount: 20,
                discountPrice: 13
              }
            ],
            stockQuantity: 15
          },
          {
            id: 4,
            name: 'Enchanting Elegance ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713972182/rnkjluuulccvyt1xz93f.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713972192/moptbv4dcaqcocsoesky.jpg'
            },
            defaultPrice: 21,
            discount: 20,
            discountPrice: 17,
            sizes: [
              {
                id: 11,
                size: 'SMALL',
                defaultPrice: 18,
                isSale: true,
                discount: 20,
                discountPrice: 14
              },
              {
                id: 12,
                size: 'MEDIUM',
                defaultPrice: 21,
                isSale: true,
                discount: 20,
                discountPrice: 17
              },
              {
                id: 13,
                size: 'LARGE',
                defaultPrice: 24,
                isSale: true,
                discount: 20,
                discountPrice: 19
              }
            ],
            stockQuantity: 15
          }
        ]
      }
    ]
  },
  tags: ['autodocs'],

  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof Sale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaleBasicLoading: Story = {};
