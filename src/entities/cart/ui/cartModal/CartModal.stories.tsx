import type { Meta, StoryObj } from '@storybook/react';
import { CartModal } from './CartModal.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'entities/CartModal',
  component: CartModal,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    StoreDecorator({
      modals: {
        modals: {
          cartModalOpen: true
        }
      },
      cart: {
        cart: [
          {
            id: 23,
            name: 'Twilight Romance ',
            discount: null,
            defaultPrice: 60,
            discountPrice: null,
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
            },
            sizes: [
              {
                id: 69,
                size: 'MEDIUM',
                defaultPrice: 60,
                discount: null,
                discountPrice: null
              },
              {
                id: 68,
                size: 'SMALL',
                defaultPrice: 48,
                discount: null,
                discountPrice: null
              },
              {
                id: 70,
                size: 'LARGE',
                defaultPrice: 65,
                discount: null,
                discountPrice: null
              }
            ],
            currentSize: 'MEDIUM',
            quantity: 1,
            cartID: '23_MEDIUM'
          }
        ]
      }
    }),
    RouterDecorator
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CartModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartModalBased: Story = {
  args: {}
};
