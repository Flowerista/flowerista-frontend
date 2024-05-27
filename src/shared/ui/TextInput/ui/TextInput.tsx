import { FC } from 'react';
import { FormInput } from '../../formInput';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  testId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  label: string;
  placeholder?: string;
  registerName: string;
  defaultValue?: string;
  required?: boolean;
}

export const TextInput: FC<IFormInput> = ({
  error,
  register,
  label,
  placeholder,
  registerName,
  defaultValue,
  testId = '',
  required
}) => {
  return (
    <div>
      <FormInput
        label={label}
        required={required}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder ? placeholder : ''}
        error={error}
        testId={testId}
        register={register(registerName, {})}
      />
      {error && <FormError error={error} />}
    </div>
  );
};
