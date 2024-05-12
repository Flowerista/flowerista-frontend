import { FC, useState } from 'react';

import styles from './styles.module.scss';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { FormInput } from '../../formInput';
import { FormError } from '../../formError';

interface IFormInput {
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  label?: string;
  placeholder?: string;
  registerName?: string;
}

export const PasswordInput: FC<IFormInput> = ({
  error,
  register,
  label,
  placeholder = 'Password',
  registerName = 'password'
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div>
      <FormInput
        label={`${label ? label : t('inputs.password')}`}
        type={showPassword ? 'text' : 'password'}
        defaultValue=""
        placeholder={placeholder}
        error={error}
        register={register(registerName)}
      >
        <div
          className={styles.btn}
          onClick={() => setShowPassword((state) => !state)}
        >
          {showPassword ? (
            <BsEyeSlash style={{ fontSize: '16px' }} />
          ) : (
            <BsEye style={{ fontSize: '16px' }} />
          )}
        </div>
      </FormInput>
      {error && <FormError error={error} />}
    </div>
  );
};
