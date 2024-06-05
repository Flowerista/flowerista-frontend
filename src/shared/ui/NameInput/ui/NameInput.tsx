import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../formInput';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  testId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export const NameInput: FC<IFormInput> = ({ error, register, testId }) => {
  const { t } = useTranslation();
  return (
    <div>
      <FormInput
        label={`${t('inputs.name')}`}
        type="text"
        defaultValue=""
        placeholder="Name"
        error={error}
        testId={testId}
        register={register('name')}
      />
      {error && <FormError error={error} />}
    </div>
  );
};
