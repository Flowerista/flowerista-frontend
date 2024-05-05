import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Buttons/Button';
import { Title } from '../../../components/Title/Title';
import { DataRoute } from '../../../data/routes';

import Flower from '../../../assets/image/restoring_access/restoring_success.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const RestoringAccessSuccess: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(DataRoute.Home);
  };
  return (
    <div className={styles.restoring}>
      <div className={styles.restoring__wrapper}>
        <Title text={`${t('restoring.recovery.title')}`} />
        <div className={styles.restoring__descr}>
          {t('restoring.recovery.desc')}
        </div>
        <Button
          text={`${t('restoring.recovery.btn1')}`}
          onClick={handleClick}
          style={{ marginTop: '50px' }}
        />
      </div>
      <div className={styles.img}>
        <img src={Flower} alt="flower" />
      </div>
    </div>
  );
};
