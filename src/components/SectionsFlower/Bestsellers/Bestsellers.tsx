import {FC} from 'react'
import {SectionFlower} from '../SectionFlower';
import {SkeletonCard} from '../../Skeletons/SkeletonCard/SkeletonCard';
import {useGetBestsellersQuery} from '../../../services/bouquete-api/bouquete-api-service';

export const Bestsellers: FC = () => {
    const { data, error, isLoading } = useGetBestsellersQuery('')
    if (isLoading) {
        return (
            <div style={{display: 'flex', marginTop: '120px'}} >
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
        <>
            <SectionFlower title='Bestsellers' data={data} style={{marginTop: '120px'}}/>
        </>
    )
}
