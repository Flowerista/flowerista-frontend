import type { Meta, StoryObj } from '@storybook/react';
import { CatalogDropDownPrice } from './CatalogDropDownPrice.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { createRef } from 'react';

const meta = {
  title: 'features/Catalog/CatalogDropDownPrice',
  component: CatalogDropDownPrice,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof CatalogDropDownPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogMobileFiltersBased: Story = {
  args: {
    min: 10,
    max: 20,
    maxInputRef: createRef<HTMLInputElement>(),
    minInputRef: createRef<HTMLInputElement>()
  }
};
