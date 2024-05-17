import type { Meta, StoryObj } from '@storybook/react';
import { CatalogBox } from './CatalogBox.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/CatalogBox',
  component: CatalogBox,
  decorators: [RouterDecorator],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CatalogBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatalogBoxBased: Story = {
  args: {
    text: 'Catalog Box'
  }
};
export const CatalogBoxNewArrivals: Story = {
  args: {
    text: 'New arrivals'
  }
};
