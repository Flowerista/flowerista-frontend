import {FC} from 'react'
import {SectionFlower} from '../SectionFlower';
import {SkeletonCard} from '../../Skeletons/SkeletonCard/SkeletonCard';
import {useGetBestsellersQuery} from '../../../services/bouquete-api/bouquete-api-service';
import {useTranslation} from 'react-i18next';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './styles.module.scss';

export const Bestsellers: FC = () => {
	const {t} = useTranslation()
	const {data, error, isLoading} = useGetBestsellersQuery('')
	if (isLoading) {
		return (
			<div style={{display: 'flex', marginTop: '120px'}}>
				<SkeletonCard/>
				<SkeletonCard/>
				<SkeletonCard/>
				<SkeletonCard/>
				<SkeletonCard/>
			</div>
		)
	}
	if (error) {
		return <h1>Something Was Wrong!</h1>
	}

	return (
		<div className={styles.bestsellers}>
			<SectionTitle title={`${t('mainPage.bestsellers')}`}/>
			<SectionFlower data={data} />
		</div>
	)
}
