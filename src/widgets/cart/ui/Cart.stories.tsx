import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './Cart.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/Cart',
  component: Cart,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    StoreDecorator({
      cart: {
        cart: [
          {
            id: 23,
            name: 'Twilight Romance ',
            discount: null,
            defaultPrice: 60,
            discountPrice: null,
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg'
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
    })
  ],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartBasedModal: Story = {
  args: {
    mode: 'modal'
  }
};
export const EmtyCart: Story = {
  decorators: [
    StoreDecorator({
      cart: {
        cart: []
      }
    })
  ],
  args: {
    mode: 'modal'
  }
};
