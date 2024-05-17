import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${import.meta.env.VITE_API_URL}/api/user/wishlist`,
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
                id: 112,
                size: 'LARGE',
                defaultPrice: 25,
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
                id: 110,
                size: 'SMALL',
                defaultPrice: 17,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 10
          }
        ]
      },
      {
        url: `${import.meta.env.VITE_API_URL}/api/order/history`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: 821,
            status: 'IN_PROCESS',
            payId: '3EU235404T591050G',
            userId: 4,
            sum: 60,
            orderItems: [
              {
                productId: 23,
                name: 'Twilight Romance ',
                quantity: 1,
                sizeId: 69,
                size: 'MEDIUM',
                price: 60,
                imageUrls: {
                  '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
                  '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
                }
              }
            ],
            address: {
              city: 'Київ',
              street: 'Перемоги',
              house: '45',
              entrance: '',
              flat: '',
              date: '2024-05-13',
              time: '11:00',
              type: 'mail'
            },
            user: {
              id: 4,
              firstName: 'Ігор',
              lastName: 'Вітрикуш',
              email: 'daktilggwp@gmail.com',
              phoneNumber: 955866161
            },
            created: 1715619878.520267,
            updated: 1715619880.921936
          },
          {
            id: 819,
            status: 'IN_PROCESS',
            payId: '4HX89383EB637740F',
            userId: 4,
            sum: 21,
            orderItems: [
              {
                productId: 3,
                name: 'Spring Blossom ',
                quantity: 1,
                sizeId: 9,
                size: 'MEDIUM',
                price: 21,
                imageUrls: {
                  '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713971896/rqdgqi4ycxtfei6mfzjf.jpg',
                  '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713971907/jt6loscu0guhjutjhf8c.jpg'
                }
              }
            ],
            address: {
              city: 'Київ',
              street: 'Перемоги',
              house: '45',
              entrance: '',
              flat: '',
              date: '2024-05-12',
              time: '17:00',
              type: 'mail'
            },
            user: {
              id: 4,
              firstName: 'Ігор',
              lastName: 'Вітрикуш',
              email: 'daktilggwp@gmail.com',
              phoneNumber: 955866161
            },
            created: 1715531836.530399,
            updated: 1715531837.690512
          }
        ]
      },
      {
        url: `${import.meta.env.VITE_API_URL}/api/user/profile`,
        method: 'GET',
        status: 200,
        response: [
          {
            firstName: 'Ігор',
            lastName: 'Вітрикуш',
            email: 'daktilggwp@gmail.com',
            phoneNumber: 955866161,
            address: {
              city: 'Київ',
              street: 'Княгині Ольги',
              house: '14',
              entrance: '1',
              flat: '1',
              date: null,
              time: null,
              type: null
            }
          }
        ]
      }
    ]
  },

  decorators: [
    StoreDecorator({
      user: {
        user: {
          address: {
            city: '',
            street: '',
            house: '',
            flat: '',
            entrance: ''
          },
          email: 'test',
          firstName: 'John',
          lastName: 'Smith',
          phoneNumber: 123123213
        }
      }
    }),
    RouterDecorator
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageBasic: Story = {
  args: {}
};
