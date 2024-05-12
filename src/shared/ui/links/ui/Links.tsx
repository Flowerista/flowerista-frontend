import { FC } from 'react';
import styles from '../../../../widgets/footer/ui/styles.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getRouteAboutUs,
  getRouteCatalog,
  getRouteDeliveryAndPayment
} from '../../../consts/router.ts';

export const Links: FC = () => {
  const { t } = useTranslation();
  return (
    <ul className={styles.footer__links}>
      <li>
        <Link to={getRouteCatalog()} target={'_top'}>
          {t('footer.links.first-link')}
        </Link>
      </li>
      <li>
        <Link to={getRouteAboutUs()} target={'_top'}>
          {t('footer.links.second-link')}
        </Link>
      </li>
      <li>
        <Link to={getRouteDeliveryAndPayment()} target={'_top'}>
          {t('footer.links.third-link')}
        </Link>
      </li>
    </ul>
  );
};
