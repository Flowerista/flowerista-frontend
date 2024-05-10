import { FC, useState } from 'react';

import { PersonalInformationForm } from './ProfileForms/PersonalInformationForm';
import { AddressForm } from './ProfileForms/AddressForm';
import { ContactsForm } from './ProfileForms/ContactsForm';
import PasswordChange from '../../../components/Modals/PasswordChange/PasswordChange';
import PasswordSuccess from '../../../components/Modals/PasswordSuccess/PasswordSuccess';

import styles from './styles.module.scss';

const PersonalInformation: FC = () => {
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
export default PersonalInformation;
