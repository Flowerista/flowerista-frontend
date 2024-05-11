import { FC, useState } from 'react';

import { PersonalInformationForm } from '../../shared/ui/profileForms/PersonalInformationForm.tsx';
import { AddressForm } from '../../shared/ui/profileForms/AddressForm.tsx';
import { ContactsForm } from '../../shared/ui/profileForms/ContactsForm.tsx';
import PasswordChange from '../../shared/ui/modals/PasswordChange/PasswordChange.tsx';
import PasswordSuccess from '../../shared/ui/modals/PasswordSuccess/PasswordSuccess.tsx';

import styles from './styles.module.scss';

const ProfilePersonalInformation: FC = () => {
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
        <AddressForm />
        <ContactsForm />
      </div>
      <PasswordChange
        isOpen={showPasswordChange}
        setOpen={setShowPasswordChange}
        showNext={setShowPasswordSuccess}
      />
      <PasswordSuccess
        isOpen={showPasswordSuccess}
        setOpen={setShowPasswordSuccess}
      />
    </>
  );
};
export default ProfilePersonalInformation;
