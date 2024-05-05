import { FC, useEffect, useState } from 'react';

import { PersonalInformationForm } from './ProfileForms/PersonalInformationForm';
import { AddressForm } from './ProfileForms/AddressForm';
import { ContactsForm } from './ProfileForms/ContactsForm';
import PasswordChange from '../../../components/Modals/PasswordChange/PasswordChange';
import PasswordSuccess from '../../../components/Modals/PasswordSuccess/PasswordSuccess';

import styles from './styles.module.scss';
import { Loader } from '../../../components/shared/Loading';
import { useGetProfile } from '../../../services/UserService/getProfile/getProfile';
import { setProfile } from '../../../store/profile/profile.slice';
import { useAppDispatch } from '../../../store/store';

const PersonalInformation: FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetProfile();
  const [showPasswordChange, setShowPasswordChange] = useState<boolean>(false);
  const [showPasswordSuccess, setShowPasswordSuccess] =
    useState<boolean>(false);

  const openPasswordModal = (): void => {
    setShowPasswordChange(true);
  };

  useEffect(() => {
    if (data) {
      dispatch(setProfile(data));
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

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
