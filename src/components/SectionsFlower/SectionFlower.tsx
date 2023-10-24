import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../data/routes';
import { BsArrowRight } from 'react-icons/bs';

import { IFlowerCard } from '../../types/flower';

import styles from './styles.module.scss';
import { Card } from '../Card/Card';

export interface ISectionsFlower {
    children?: ReactNode;
    data: IFlowerCard[];
    title: string;
    style?: object;
}

export const SectionFlower: FC<ISectionsFlower> = ({data, title, style}) => {
  return (
    <section style={style}>
      <div className={styles.head}>
        <div className={styles.head__title}>{title}</div>
        <div className={styles.head__link}>
            <Link to={Route.Catalog}>
                see all
            </Link>
            <BsArrowRight style={{fontSize: "24px"}}/>
        </div>
      </div>
      <div className={styles.content}>
        {data && data.map(({id, name, discount, defaultPrice, discountPrice}) => (
          <Card 
            id={id}
            name={name}
            discount={discount}
            defaultPrice={defaultPrice} 
            discountPrice={discountPrice}
            key={id}
          />
        ))}
      </div>
    </section>
  )
}
