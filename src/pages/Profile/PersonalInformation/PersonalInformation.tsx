import { FC, useState } from 'react'
import { Sidebar } from '../../../components/Sidebar/Sidebar'

import styles from './styles.module.scss';
import { PersonalInformationForm } from './ProfileForms/PersonalInformationForm';
import { AddressForm } from './ProfileForms/AddressForm';
import { ContactsForm } from './ProfileForms/ContactsForm';
import { Link } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';
import PasswordChange from '../../../components/Modals/PasswordChange/PasswordChange';



export const PersonalInformation: FC = () => {
  const [showPasswordChange, setShowPasswordChange] = useState<boolean>(true)

  return (
    <>
      <div className={styles.page_nav}><Link to={DataRoute.Home} >Home</Link> | Profile</div>
      <div className={styles.information}>
        <div className={styles.forms__wrapper}>
          <PersonalInformationForm/>
          <AddressForm/>
          <ContactsForm/>
        </div>
        <Sidebar className={styles.sidebar}/>
      </div>
      <PasswordChange isOpen={showPasswordChange} setOpen={setShowPasswordChange}/>
    </>
  )
}
