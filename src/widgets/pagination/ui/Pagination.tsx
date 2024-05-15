import { FC } from 'react';
import styles from './styles.module.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { InterfaceAllFlower } from '../../../pages/catalogPage/model/types/flowers.ts';

interface IPagination {
  data: InterfaceAllFlower | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePageClick: any;
}

export const Pagination: FC<IPagination> = ({ data, handlePageClick }) => {
  return (
    <div className={styles.pagination__container}>
      <ReactPaginate
        pageCount={data?.totalPages || 1}
        breakLabel="..."
        nextLabel={<BsArrowRight />}
        previousLabel={<BsArrowLeft />}
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
        disabledLinkClassName={styles.disabled}
      />
    </div>
  );
};
