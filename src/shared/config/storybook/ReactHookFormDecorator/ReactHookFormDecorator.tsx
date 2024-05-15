import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { ComponentType } from 'react';

export const ReactHookFormDecorator = (Story: ComponentType) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};
