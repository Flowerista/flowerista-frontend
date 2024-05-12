import { FC } from 'react';
import { SectionFlower } from '../../sectionFlower/SectionFlower.tsx';
import { SkeletonCard } from '../../../shared/ui/SkeletonCard';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../../../shared/ui/SectionTitle';

import styles from './styles.module.scss';
import { useGetTopSellers } from '../model/api/getTopSellers/getTopSellers.ts';

export const Sale: FC = () => {
  const { t } = useTranslation();

  const { data, error, isLoading } = useGetTopSellers();

  if (isLoading) {
    return (
      <div
        style={{ display: 'flex', marginTop: '120px', marginBottom: '120px' }}
      >
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
    <div className={styles.sale}>
      <SectionTitle title={`${t('mainPage.sale')}`} />
      <SectionFlower data={data} />
    </div>
  );
};
