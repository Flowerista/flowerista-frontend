import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../formInput';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export const SurnameInput: FC<IFormInput> = ({ error, register }) => {
  const { t } = useTranslation();
  return (
    <div>
      <FormInput
        label={`${t('inputs.surname')}`}
        type="text"
        defaultValue=""
        placeholder="Surname"
        error={error}
        register={register('surname')}
      />
      {error && <FormError error={error} />}
    </div>
  );
};
