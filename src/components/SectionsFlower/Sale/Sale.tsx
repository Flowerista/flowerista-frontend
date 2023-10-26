import {FC} from 'react'
import {SectionFlower} from '../SectionFlower';
import {SkeletonCard} from '../../Skeletons/SkeletonCard/SkeletonCard';
import {useGetTopSellersQuery} from '../../../services/bouquete-api/bouquete-api-service';


export const Sale: FC = () => {
  const { data, error, isLoading } = useGetTopSellersQuery('')

    if (isLoading) {
        return (
            <div style={{display: 'flex', marginTop: '120px', marginBottom: '120px'}}>
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
            <SectionFlower title='Sale' data={data} style={{marginTop: '120px', marginBottom: '120px'}}/>
        </>
    )
}
