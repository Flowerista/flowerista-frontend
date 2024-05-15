import type { Meta, StoryObj } from '@storybook/react';
import { PersonalInformationForm } from './PersonalInformationForm.tsx';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator.tsx';

const meta = {
  title: 'features/Profile/PersonalInformationForm',
  component: PersonalInformationForm,
  parameters: {
    layout: 'centered'
  },
  decorators: [StoreDecorator({})],
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PersonalInformationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonalInformationFormBased: Story = {
  args: {
    onOpen: () => {}
  }
};
