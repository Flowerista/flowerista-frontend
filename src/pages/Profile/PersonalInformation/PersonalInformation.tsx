import {FC, useEffect, useState} from 'react';

import {PersonalInformationForm} from './ProfileForms/PersonalInformationForm';
import {AddressForm} from './ProfileForms/AddressForm';
import {ContactsForm} from './ProfileForms/ContactsForm';
import PasswordChange from '../../../components/Modals/PasswordChange/PasswordChange';
import PasswordSuccess from '../../../components/Modals/PasswordSuccess/PasswordSuccess';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {getProfile} from '../../../store/user/user.slice';

import styles from './styles.module.scss';
import {Loader} from '../../../components/shared/Loading';


export const PersonalInformation: FC = () => {
	const {loadingStatus, errorStatus} = useAppSelector(state => state.user)
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProfile())
	}, []);

	const [showPasswordChange, setShowPasswordChange] = useState<boolean>(false)
	const [showPasswordSuccess, setShowPasswordSuccess] = useState<boolean>(false)

	const openPasswordModal = (): void => {
		setShowPasswordChange(true)
	}

	if (loadingStatus.getProfile) {
		return <Loader/>
	}

	if (errorStatus.getProfile) {
		return <h1>Error...</h1>
	}

	return (
		 <>
			 <div className={styles.forms__wrapper}>
				 <PersonalInformationForm onOpen={openPasswordModal}/>
				 <AddressForm/>
				 <ContactsForm/>
			 </div>
			 <PasswordChange isOpen={showPasswordChange} setOpen={setShowPasswordChange} showNext={setShowPasswordSuccess}/>
			 <PasswordSuccess isOpen={showPasswordSuccess} setOpen={setShowPasswordSuccess}/>
		 </>
	)
}
