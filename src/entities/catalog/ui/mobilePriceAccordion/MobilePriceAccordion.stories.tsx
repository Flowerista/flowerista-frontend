import type { Meta, StoryObj } from '@storybook/react';
import { MobilePriceAccordion } from './MobilePriceAccordion.tsx';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { createRef } from 'react';

const meta = {
  title: 'entities/Catalog/MobilePriceAccordion',
  component: MobilePriceAccordion,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  argTypes: {}
} satisfies Meta<typeof MobilePriceAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MobilePriceAccordionBased: Story = {
  args: {
    min: 10,
    max: 20,
    maxInputRef: createRef<HTMLInputElement>(),
    minInputRef: createRef<HTMLInputElement>()
  }
};
