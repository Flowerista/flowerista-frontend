import { FC, useRef, useState } from 'react'
import styles from './styles.module.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

export const Pagination: FC = () => {
    const [page, setPage] = useState(1)
    const handlePageClick = (event: any) => {
        const newPage = event.selected + 1 
        setPage(newPage)
        console.log(newPage);
    }

    return (
        <>
            <ReactPaginate
                pageCount={8}
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
        </>
    )
}