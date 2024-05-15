import type { Meta, StoryObj } from '@storybook/react';
import { SectionFlower } from './SectionFlower.tsx';
import { StoreDecorator } from '../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'widgets/SectionFlower',
  component: SectionFlower,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof SectionFlower>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionFlowerBased: Story = {
  args: {
    data: [
      {
        id: 7,
        name: 'Vintage Romance ',
        imageUrls: {
          '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973216/vhzcjxx5dk6m7ql2x9cj.jpg'
        },
        defaultPrice: 30,
        discount: 20,
        discountPrice: 24,
        sizes: []
      }
    ]
  }
};
