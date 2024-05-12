import { FC } from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}

export const PhoneInput: FC<IFormInput> = ({ error, control }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <label className={styles.label}>
              {t('inputs.telephone')}
              <InputMask
                value={value}
                onChange={onChange}
                mask="+380 99 999 99 99"
                maskPlaceholder={'0'}
                onBlur={onBlur}
                className={`${styles.input} ${error ? styles.input_error : ''}`}
                placeholder="+380 99 999 99 99"
                type="tel"
              />
            </label>
            {error && <FormError error={error} />}
          </>
        )}
        control={control}
        name="phone"
      />
    </div>
  );
};
