import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {Route} from '../../data/routes';
import BigImg from '../../assets/image/about_us/big_img.png';
import SmallImg from '../../assets/image/about_us/small_img.png';
import {BsArrowRight} from 'react-icons/bs';

export interface IAboutUs {
}

export const AboutUs: FC<IAboutUs> = () => {
	return (
        <section className={styles.section}>
            <div className={styles.section__title}>About Us</div>
            <div className={styles.content}>
                <div className={styles.content__left}>
                    <p className={styles.content__left__autor}>Anna . florist</p>
                    <div className={styles.wrapper__img_small}>
                        <img src={SmallImg} alt="" />
                    </div>
                </div>
                <div className={styles.content__center}>
                    <div className={styles.content__descr}>
                        <p>
                            We are a team of passionate florists dedicated to crafting exquisite floral arrangements.
                        </p>
                        <br/>
                        <p>
                            Our mission is to bring beauty and joy into your life through the freshest and most beautiful flowers.       
                            We carefully curate each bouquet, aiming to convey your feelings and emotions through flowers.
                        </p>
                        <br/>
                        <p>
                            Our goal is to make your personal moments happy and unforgettable.  
                        </p>
                        <br/>
                        <p>
                            Join us on a journey through the enchanting world of flowers and gifts, and we promise to brighten each day with color and fragrance
                        </p>
                    </div>
                    <div className={styles.content__link}>
                        <Link to={Route.AboutUs}>
                            more about
                        </Link>
                        <BsArrowRight style={{fontSize: "24px", opacity: '.4'}}/>
                    </div>
                </div>
                <div className={styles.content__right}>
                    <img src={BigImg} alt="" />
                </div>
            </div>
        </section>
	);
};