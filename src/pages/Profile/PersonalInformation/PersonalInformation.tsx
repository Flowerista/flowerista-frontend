import { FC, useEffect, useState } from 'react'
import { Sidebar } from '../../../components/Sidebar/Sidebar'

import styles from './styles.module.scss';
import { PersonalInformationForm } from './ProfileForms/PersonalInformationForm';
import { AddressForm } from './ProfileForms/AddressForm';
import { ContactsForm } from './ProfileForms/ContactsForm';
import { Link, useNavigate } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';
import PasswordChange from '../../../components/Modals/PasswordChange/PasswordChange';
import PasswordSuccess from '../../../components/Modals/PasswordSuccess/PasswordSuccess';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getProfile } from '../../../store/user/user.slice';



export const PersonalInformation: FC = () => {
  const navigate = useNavigate()
  const {loadingStatus, errorStatus} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token') === undefined) {
      navigate(DataRoute.Login)
    } else {
      dispatch(getProfile())
    }
  }, []);
  const [showPasswordChange, setShowPasswordChange] = useState<boolean>(false)
  const [showPasswordSuccess, setShowPasswordSuccess] = useState<boolean>(false)
  
  const openPasswordModal = (): void =>  {
    setShowPasswordChange(true)
  }

  if (loadingStatus.getProfile) {
    return <h1>Loading...</h1>
  }

  if (errorStatus.getProfile) {
    return <h1>Error...</h1>
  }

  return (
    <>
      <div className={styles.page_nav}><Link to={DataRoute.Home} >Home</Link> | Profile</div>
      <div className={styles.information}>
        <div className={styles.content}>
          <div className={styles.forms__wrapper}>
            <PersonalInformationForm onOpen={openPasswordModal}/>
            <AddressForm/>
            <ContactsForm/>
          </div>
        </div>
      <div className={styles.wrapper__main}>
        <div className={styles.wrapper__second}>
          <Sidebar className={styles.sidebar} />
          <div></div>
        </div>
      </div>
      </div>
      <PasswordChange isOpen={showPasswordChange} setOpen={setShowPasswordChange} showNext={setShowPasswordSuccess}/>
      <PasswordSuccess isOpen={showPasswordSuccess} setOpen={setShowPasswordSuccess}/>
    </>
  )
}
