import type { Meta, StoryObj } from '@storybook/react';
import { ProfileWishlist } from './ProfileWishlist.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/ProfileWishlist',
  component: ProfileWishlist,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof ProfileWishlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileWishlistBasic: Story = {
  args: {
    wishlist: [
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
        sizes: []
      }
    ]
  }
};
export const ProfileWishlistWithOutData: Story = {
  args: {}
};
