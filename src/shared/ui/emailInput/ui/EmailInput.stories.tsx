import { Meta, StoryFn } from '@storybook/react';
import { EmailInput } from './EmailInput.tsx';
import { ReactHookFormDecorator } from '../../../config/storybook/ReactHookFormDecorator/ReactHookFormDecorator.tsx';
import { useForm } from 'react-hook-form';

export default {
  title: 'shared/EmailInput',
  component: EmailInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [ReactHookFormDecorator],
  argTypes: {},
  args: {}
} as Meta;

type StoryType = StoryFn<typeof EmailInput>;
// eslint-disable-next-line
const Template = (args: any) => {
  const { register } = useForm();

  return <EmailInput {...args} register={register} />;
};

export const Basic: StoryType = (args) => <Template {...args} />;
Basic.args = {};

export const WithError: StoryType = (args) => <Template {...args} />;
WithError.args = {
  error: 'error'
};
