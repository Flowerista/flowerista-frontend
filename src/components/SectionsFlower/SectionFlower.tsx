import {FC} from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

import {IFlowerCard} from '../../interface/flower';

import styles from './styles.module.scss';
import {Card} from '../Card/Card';
import {DataRoute} from '../../data/routes';

export interface ISectionsFlower {
    data: IFlowerCard[] | undefined;
    title: string;
    style?: object;
}

export const SectionFlower: FC<ISectionsFlower> = ({data, title, style}) => {
  return (
    <section style={style}>
      <div className={styles.head}>
        <div className={styles.head__title}>{title}</div>
        <div className={styles.head__link__wrapper}>
            <Link to={DataRoute.Catalog} className={styles.head__link}>
                see all <BsArrowRight style={{fontSize: "24px"}}/>
            </Link>
        </div>
      </div>
      <div className={styles.content}>
        {data && data.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            discount={item.discount}
            defaultPrice={item.defaultPrice}
            discountPrice={item.discountPrice}
            img={item.imageUrls?.['1']}
            key={item.id}
          />
        ))}
      </div>
    </section>
  )
}
