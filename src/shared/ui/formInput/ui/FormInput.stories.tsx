import { Meta, StoryFn } from '@storybook/react';
import { FormInput } from './FormInput.tsx';
import { ReactHookFormDecorator } from '../../../config/storybook/ReactHookFormDecorator/ReactHookFormDecorator.tsx';
import { useForm } from 'react-hook-form';

export default {
  title: 'shared/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [ReactHookFormDecorator],
  argTypes: {},
  args: {}
} as Meta;

type StoryType = StoryFn<typeof FormInput>;
// eslint-disable-next-line
const Template = (args: any) => {
  const { register } = useForm();

  return <FormInput {...args} register={register} />;
};

export const Basic: StoryType = (args) => <Template {...args} />;
Basic.args = {
  label: 'Basic',
  placeholder: 'Basic'
};

export const WithError: StoryType = (args) => <Template {...args} />;
WithError.args = {
  label: 'WithError',
  placeholder: 'WithError',
  error: 'error'
};
