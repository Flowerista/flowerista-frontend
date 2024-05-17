import type { Meta, StoryObj } from '@storybook/react';
import { WishlistModal } from './Wishlist.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { RouterDecorator } from '../../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'entities/modals/WishlistModal',
  component: WishlistModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      modals: {
        modals: {
          wishlistModalOpen: true
        }
      }
    }),
    RouterDecorator
  ],
  argTypes: {}
} satisfies Meta<typeof WishlistModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WishlistModalBased: Story = {
  args: {}
};
