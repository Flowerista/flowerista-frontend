import {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import i18next from 'i18next';
import {Language} from '../../../i18n/enums';


export interface ILanguages {
}

export const Languages: FC<ILanguages> = () => {

	const [currentLanguage, setCurrentLanguage] = useState<string>(i18next.language);

	const changeLanguage = (language: string) => {
		i18next.changeLanguage(language);
		setCurrentLanguage(language);
		localStorage.setItem('selectedLanguage', language);
	};

	useEffect(() => {
		const selectedLanguage = localStorage.getItem('selectedLanguage');
		if (selectedLanguage) {
			changeLanguage(selectedLanguage);
		}
	}, [i18next.language]);

	return (
		 <div className={styles.container}>
			 <button className={`${currentLanguage === Language.EN && `${styles.active}`}`}
			         onClick={() => changeLanguage(Language.EN)}>en
			 </button>
			 <span>|</span>
			 <button className={`${currentLanguage === Language.UA && `${styles.active}`}`}
			         onClick={() => changeLanguage(Language.UA)}>ua
			 </button>
		 </div>
	);
};

