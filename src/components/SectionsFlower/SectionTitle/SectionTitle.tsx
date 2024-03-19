import {CSSProperties, FC} from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import { DataRoute } from '../../../data/routes';

import styles from './styles.module.scss';

export interface ISectionTitle {
    title: string;
    style?: CSSProperties;
    className?: string
}

export const SectionTitle: FC<ISectionTitle> = ({title, style, className}) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(styles.head, className)} style={style}>
            <div className={styles.head__title}>{title}</div>
            <div className={styles.head__link__wrapper}>
                <Link target={'_top'} to={DataRoute.Catalog} className={styles.head__link}>
                    {t("mainPage.btn-see-all")} <BsArrowRight style={{fontSize: "24px"}}/>
                </Link>
            </div>
        </div>
    )
}