import { FC } from 'react';
import { SectionFlower } from '../../sectionFlower/SectionFlower.tsx';
import { SkeletonCard } from '../../../shared/ui/SkeletonCard';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../../shared/ui/SectionTitle';
import styles from './styles.module.scss';
import { useGetBestsellers } from '../model/api/getBestsellers/getBestsellers.ts';

export const Bestsellers: FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetBestsellers();
  if (isLoading) {
    return (
      <div style={{ display: 'flex', marginTop: '120px' }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  if (error) {
    return <h1>Something Was Wrong!</h1>;
  }

  return (
    <div className={styles.bestsellers}>
      <SectionTitle title={`${t('mainPage.bestsellers')}`} />
      <SectionFlower data={data} />
    </div>
  );
};
