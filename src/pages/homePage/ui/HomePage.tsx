import { FC } from 'react';
import { AboutUs } from '../../../widgets/homeAboutUs';
import { Reviews } from '../../../widgets/reviews/Reviews.tsx';
import styles from './styles.module.scss';
import { Bestsellers } from '../../../widgets/bestsellers';
import { Sale } from '../../../widgets/sale';
import { useTranslation } from 'react-i18next';
import { CatalogBox } from '../../../widgets/catalogBox';
import { HomeSwiper } from '../../../widgets/homeSwiper';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <main data-testid="HomePage" className={styles.home}>
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
