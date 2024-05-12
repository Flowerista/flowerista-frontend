import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../formInput';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export const EmailInput: FC<IFormInput> = ({ error, register }) => {
  const { t } = useTranslation();
  return (
    <div>
      <FormInput
        label={`${t('inputs.email')}`}
        type="email"
        defaultValue=""
        placeholder="example@example.com"
        error={error}
        register={register('email')}
      />
      {error && <FormError error={error} />}
    </div>
  );
};
