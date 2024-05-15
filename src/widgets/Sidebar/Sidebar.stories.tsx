import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar.tsx';
import { StoreDecorator } from '../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';
import { TabGroup } from '@headlessui/react';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [StoreDecorator({}), (story) => <TabGroup>{story()}</TabGroup>],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarBased: Story = {
  args: {}
};
