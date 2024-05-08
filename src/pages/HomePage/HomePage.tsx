import { FC } from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { Reviews } from './Reviews/Reviews';
import { HomeSwiper } from './HomeSwiper';
import { CatalogBox } from '../../components/CatalogBox';
import styles from './styles.module.scss';
import { Bestsellers } from '../../components/SectionsFlower/Bestsellers/Bestsellers';
import { Sale } from '../../components/SectionsFlower/Sale/Sale';
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
