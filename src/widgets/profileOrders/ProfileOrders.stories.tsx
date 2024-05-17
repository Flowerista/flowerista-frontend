import type { Meta, StoryObj } from '@storybook/react';
import { ProfileOrders } from './ProfileOrders.tsx';
import { RouterDecorator } from '../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/ProfileOrders',
  component: ProfileOrders,
  decorators: [RouterDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileOrders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileOrdersBasic: Story = {
  args: {
    order: [
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
          firstName: '123',
          lastName: '123',
          email: '123123@gmail.com',
          phoneNumber: 555555
        },
        created: 1715619878.520267,
        updated: 1715619880.921936
      }
    ]
  }
};
export const ProfileOrdersWithOutElements: Story = {
  args: {}
};
