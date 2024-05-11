import { FC } from 'react';
import { AboutUs } from '../../../widgets/homeAboutUs/AboutUs.tsx';
import { Reviews } from '../../../widgets/reviews/Reviews.tsx';
import { HomeSwiper } from '../../../widgets/homeSwiper';
import { CatalogBox } from '../../../shared/ui/CatalogBox';
import styles from './styles.module.scss';
import { Bestsellers } from '../../../store/bestsellers/Bestsellers.tsx';
import { Sale } from '../../../store/sale/Sale.tsx';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.home}>
      <HomeSwiper />
      <div className={styles.home__catalog}>
        <CatalogBox text={t('mainPage.box1')} />
        <CatalogBox text={t('mainPage.box2')} />
      </div>
      <Bestsellers />
      <Sale />
      <AboutUs />
      <Reviews />
    </main>
  );
};

export default HomePage;
