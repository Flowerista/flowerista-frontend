import {FC} from 'react';
import styles from './styles.module.scss';
import Flower from '../../assets/image/reviews/flower.png'


export interface IReviews {
}

export const Reviews: FC<IReviews> = () => {
	return (
        <section className={styles.section}>
            <div className={styles.section__title}>Reviews</div>
            <div className={styles.content}>
                <div className={styles.review}>
                    <p className={styles.review__title}>Sarah</p>
                    <p className={styles.review__text}>I ordered a bouquet for my daughter's graduation, and it was an absolute showstopper! The combination of colors and the freshness of the flowers made it truly exceptional. She couldn't stop smiling when she received...</p>
                </div>
                <div className={styles.review}>
                    <p className={styles.review__title}>John</p>
                    <p className={styles.review__text}>I've never been much of a flower person, but this bouquet completely changed my perspective. The scent and beauty of these flowers have added a new level of freshness and positivity to my home. I'm i...</p>
                </div>
                <div className={styles.wrapper_img}>
                    <img src={Flower} alt="flower" />
                </div>
                <div className={styles.review}>
                    <p className={styles.review__title}>Anna</p>
                    <p className={styles.review__text}>I ordered a bouquet for my daughter's graduation, and it was an absolute showstopper! The combination of colors and the freshness of the flowers made it truly exceptional. She couldn't stop smiling when she received...</p>
                </div>
            </div>
        </section>
	);
};