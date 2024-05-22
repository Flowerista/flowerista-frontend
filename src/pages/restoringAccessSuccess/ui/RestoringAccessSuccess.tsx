import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../../shared/ui/Title';

import Flower from '../../../shared/assets/image/restoring_access/restoring_success.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { getRouteHome } from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';

export const RestoringAccessSuccess: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRouteHome());
  };
  return (
    <div data-testid="RestoringAccessSuccess" className={styles.restoring}>
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
