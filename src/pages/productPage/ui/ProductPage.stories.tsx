import type { Meta, StoryObj } from '@storybook/react';
import ProductPage from './ProductPage.tsx';
import { storybookMockData } from '../../../shared/config/storybook/storybookMockData/sotrybookMockData.ts';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const meta = {
  title: 'pages/ProductPage',
  component: ProductPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/product/34']}>
        <Routes>
          <Route path="/product/:productId" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
    StoreDecorator({
      recentlyViewed: {
        recentlyViewed: []
      }
    })
  ],
  parameters: {
    layout: 'centered',
    mockData: [
      storybookMockData.getProductPage(),
      storybookMockData.getUserWishlist()
    ]
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Перевизначаємо декоратори лише для цієї окремої історії

export const ProductPageBasic: Story = {
  args: {}
};
