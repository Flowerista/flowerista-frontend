import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutUserInformationUnregistered } from './CheckOutUserInformationUnregistered.tsx';
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator.tsx';

const meta = {
  title: 'widgets/CheckOutUserInformationUnregistered',
  component: CheckOutUserInformationUnregistered,
  decorators: [RouterDecorator],
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
