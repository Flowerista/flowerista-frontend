import { FC } from 'react';
import FormInput from '../FormInput/FormInput.tsx';
import FormError from '../FormError/FormError.tsx';
import { useTranslation } from 'react-i18next';

interface IFormInput {
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const SurnameInput: FC<IFormInput> = ({ error, register }) => {
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

export default SurnameInput;
