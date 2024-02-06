import {FC} from 'react';
import styles from '../styles.module.scss';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {useTranslation} from 'react-i18next';


export const Links: FC = () => {
	const {t}=useTranslation()
	return (
		 <ul className={styles.footer__links}>
			 <li><Link to={DataRoute.Catalog} target={"_top"}>{t("footer.links.first-link")}</Link></li>
			 <li><Link to={DataRoute.AboutUs} target={"_top"}>{t("footer.links.second-link")}</Link></li>
			 <li><Link to={DataRoute.DeliveryAndPayment} target={"_top"}>{t("footer.links.third-link")}</Link></li>
		 </ul>
	);
};

