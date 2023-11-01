import { FC, useRef, useState, useEffect } from 'react'
import styles from './styles.module.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { useGetAllFlowersQuery } from '../../services/bouquete-api/bouquete-api-service';
import { SkeletonCard } from '../Skeletons/SkeletonCard/SkeletonCard';
import { Card } from '../Card/Card';
import { IFetchAllFlowers } from '../../interface/flower';

export const Pagination: FC = () => {
    const dataFetch: IFetchAllFlowers = {
        flowerIds: undefined,
        colorIds: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        sortByNewest: false,
        sortByPriceHighToLow:  false,
        sortByPriceLowToHigh: false,
        page: 1
    }
    const [dataState, setDataState] = useState(dataFetch)
    
    const handlePageClick = (event: any) => {
        const newPage = event.selected + 1 
        setDataState((state) => ({...state, page: newPage}))
    }
    const { data, error, isFetching } = useGetAllFlowersQuery(dataState)
    console.log(isFetching)

    if (isFetching) {
        return (
            <>
                <div style={{display: 'flex', marginTop: '50px', flexWrap: 'wrap', rowGap: '100px', marginBottom: '120px'}} >
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </div>
                <div className={styles.pagination__container}>
                    <ReactPaginate
                        pageCount={data?.totalPages || 1}
                        breakLabel="..."
                        nextLabel={<BsArrowRight/>}
                        previousLabel={<BsArrowLeft/>}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                        containerClassName={styles.pagination__wrapper}
                        pageLinkClassName={styles.pagination__item}
                        activeLinkClassName={styles.active}
                        previousLinkClassName={styles.button}
                        nextLinkClassName={styles.button}
                        breakLinkClassName={styles.pagination__item}
                    />
                </div>
            </>
        )
    }

    if (error) {
        return <h1>Something Was Wrong!</h1>
    }
   
    return (
        <>
        {data && 
            <div className={styles.flower__wrapper}>
                {data && data.content.map(item => (
                    <Card
                        id={item.id}
                        name={item.name}
                        discount={item.discount}
                        defaultPrice={item.defaultPrice}
                        discountPrice={item.discountPrice}
                        img={item.imageUrls?.['1']}
                        key={item.id}
                />
                )) }
            </div>
        }
            <div className={styles.pagination__container}>
                <ReactPaginate
                    pageCount={data?.totalPages || 1}
                    breakLabel="..."
                    nextLabel={<BsArrowRight/>}
                    previousLabel={<BsArrowLeft/>}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    containerClassName={styles.pagination__wrapper}
                    pageLinkClassName={styles.pagination__item}
                    activeLinkClassName={styles.active}
                    previousLinkClassName={styles.button}
                    nextLinkClassName={styles.button}
                    breakLinkClassName={styles.pagination__item}
                />
            </div>
        </>
    )
}