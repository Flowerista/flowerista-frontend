import {FC} from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

import {IFlowerCard} from '../../interface/flower';

import styles from './styles.module.scss';
import {Card} from '../Card/Card';
import {DataRoute} from '../../data/routes';
import {useTranslation} from 'react-i18next';

export interface ISectionsFlower {
    data: IFlowerCard[] | undefined;
    title: string;
    style?: object;
}

export const SectionFlower: FC<ISectionsFlower> = ({data, title, style}) => {
  const {t} = useTranslation()
  return (
    <section style={style}>
      <div className={styles.head}>
        <div className={styles.head__title}>{title}</div>
        <div className={styles.head__link__wrapper}>
            <Link to={DataRoute.Catalog} className={styles.head__link}>
              {t("mainPage.btn-see-all")} <BsArrowRight style={{fontSize: "24px"}}/>
            </Link>
        </div>
      </div>
      <div className={styles.content}>
        {data && data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            discount={item.discount}
            defaultPrice={item.defaultPrice}
            discountPrice={item.discountPrice}
            imageUrls={item.imageUrls}
            sizes={item.sizes}
          />
        ))}
      </div>
    </section>
  )
}
