import { FC } from 'react';
import { SectionFlower } from '../SectionFlower';
import { SkeletonCard } from '../../Skeletons/SkeletonCard/SkeletonCard';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './styles.module.scss';
import { useGetTopSellers } from '../../../services/bouquete-api/getTopSellers/getTopSellers';

export const Sale: FC = () => {
  const { t } = useTranslation();

  const { data, error, isLoading } = useGetTopSellers('');

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
