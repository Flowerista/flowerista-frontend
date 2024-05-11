import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import i18next from 'i18next';
import { Language } from '../../../config/i18n/enums.ts';
import { useAppSelector } from '../../../../store/store.ts';
import { useSharedActions } from '../../../../store/shared/shared.slice.ts';

export interface ILanguages {}

export const Languages: FC<ILanguages> = () => {
  const currentLanguage = useAppSelector((state) => state.shared.lang);
  const { setLang } = useSharedActions();

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
    setLang(language);
    localStorage.setItem('selectedLanguage', language);
    // window.location.reload();
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage);
    }
  }, [i18next.language]);

  return (
    <div className={styles.container}>
      <button
        className={`${currentLanguage === Language.EN && `${styles.active}`}`}
        onClick={() => changeLanguage(Language.EN)}
      >
        en
      </button>
      <span>|</span>
      <button
        className={`${currentLanguage === Language.UA && `${styles.active}`}`}
        onClick={() => changeLanguage(Language.UA)}
      >
        ua
      </button>
    </div>
  );
};
