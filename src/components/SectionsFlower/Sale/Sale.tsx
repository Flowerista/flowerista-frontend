import { FC } from 'react'
import styles from './styles.module.scss';
import { SectionFlower } from '../SectionFlower';
import { testApi } from '../../../services/test-api/test-api-service';
import { IFlowerCard } from '../../../types/flower';
import { SkeletonCard } from '../../Skeletons/SkeletonCard/SkeletonCard';

interface IFlowerItem {
    id: number;
    name: string;
    imageUrls: {
        [key: string]: string;
    }
    defaultPrice: number;
    discount?: number;
    discountPrice?: number;
}

export const Sale: FC = () => {
    const { data, error, isLoading } = testApi.useTestFetchQuery('')
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
        return <h1>Error</h1>
    }
    const flowerData: IFlowerItem[] = [...data]
    const newData: IFlowerCard[] = flowerData.map(item => (
        {
            id: item.id,
            name: item.name,
            defaultPrice: item.defaultPrice,
            discount: item?.discount,
            discountPrice: item?.discountPrice,
            img: item?.imageUrls['1']
        }
    ))
    
    return (
        <>
            <SectionFlower title='Sale' data={newData} style={{marginTop: '120px', marginBottom: '120px'}}/>
        </>
    )
}