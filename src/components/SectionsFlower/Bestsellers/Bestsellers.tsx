import { FC } from 'react'
import styles from './styles.module.scss';
import { SectionFlower } from '../SectionFlower';
import { testApi } from '../../../services/test-api/test-api-service';
import { IFlowerCard } from '../../../types/flower';

interface IFlowerItem {
    id: number;
    flowers: any[];
    colors: any[];
    itemCode: string;
    name: string;
    defaultPrice: number;
    discount: number;
    discountPrice: number;
    size: any;
    quantity: number;
    soldQuantity: number;
}

interface IFlowersDataAnswer {
    _embedded: {
        bouqueteDtoList: IFlowerItem[]
    }
}


export const Bestsellers: FC = () => {
    const { data, error, isLoading } = testApi.useTestFetchQuery('')
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error</h1>
    }
    const flowerData: IFlowerItem[] = data?._embedded?.bouqueteDtoList
    const newData: IFlowerCard[] = flowerData.map(item => (
        {
            id: item.id,
            name: item.name,
            defaultPrice: item.defaultPrice,
            discount: item?.discount,
            discountPrice: item?.discountPrice,
        }
    ))
    console.log(newData);
    
    return (
        <>
            <SectionFlower title='Bestsellers' data={newData}/>
        </>
    )
}
