import type { Meta, StoryObj } from '@storybook/react';
import { SidebarModal } from './SidebarModal.tsx';
import { StoreDecorator } from '../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { TabGroup } from '@headlessui/react';

const meta = {
  title: 'widgets/SidebarModal',
  component: SidebarModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({}), (story) => <TabGroup>{story()}</TabGroup>],
  argTypes: {}
} satisfies Meta<typeof SidebarModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarModalBased: Story = {
  args: {}
};
