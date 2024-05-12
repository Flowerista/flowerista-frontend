import { FC, useState } from 'react';

import { PersonalInformationForm } from '../../../features/personalInformationForm';
import styles from './styles.module.scss';
import { ProfileAddressForm } from '../../../features/profileAddressForm';
import { ProfileContactsForm } from '../../../features/profileContactsForm';
import { PasswordChangeModal } from '../../../features/passwordChangeModal';
import { PasswordSuccessModal } from '../../../features/passwordSuccessModal';

export const ProfilePersonalInformation: FC = () => {
  const [showPasswordChange, setShowPasswordChange] = useState<boolean>(false);

  const [showPasswordSuccess, setShowPasswordSuccess] =
    useState<boolean>(false);

  const openPasswordModal = (): void => {
    setShowPasswordChange(true);
  };

  return (
    <>
      <div className={styles.forms__wrapper}>
        <PersonalInformationForm onOpen={openPasswordModal} />
        <ProfileAddressForm />
        <ProfileContactsForm />
      </div>
      <PasswordChangeModal
        isOpen={showPasswordChange}
        setOpen={setShowPasswordChange}
        showNext={setShowPasswordSuccess}
      />
      <PasswordSuccessModal
        isOpen={showPasswordSuccess}
        setOpen={setShowPasswordSuccess}
      />
    </>
  );
};
