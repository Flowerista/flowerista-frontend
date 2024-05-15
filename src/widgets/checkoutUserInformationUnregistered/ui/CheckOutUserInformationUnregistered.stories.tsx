import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutUserInformationUnregistered } from './CheckOutUserInformationUnregistered.tsx';

const meta = {
  title: 'widgets/CheckOutUserInformationUnregistered',
  component: CheckOutUserInformationUnregistered,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CheckOutUserInformationUnregistered>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckOutUserInformationUnregisteredBased: Story = {
  args: {}
};
