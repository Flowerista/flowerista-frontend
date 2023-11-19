import { FC } from 'react';
import styles from './styles.module.scss';
import sectionImg1 from '../../assets/image/about_us_page/section_1.png'; 
import sectionImg3 from '../../assets/image/about_us_page/section_3.png'; 
import Pavlo from '../../assets/image/about_us_page/team/pavlo.png';
import Anna from '../../assets/image/about_us_page/team/anna.png';
import Maxim from '../../assets/image/about_us_page/team/maxim.png';
import Ekaterina from '../../assets/image/about_us_page/team/ekaterina.png';
import Alex from '../../assets/image/about_us_page/team/alex.png';
import Flower from '../../assets/image/about_us_page/flower.png';

export const AboutUs: FC = () => {
    const teamData = [
        {
            img: Pavlo,
            name: 'Pavlo',
            job: 'Lead Florist',
            descr: [
                'Pavel is our lead florist with over 10 years of experience in floral design and education.',
                'He started his career in prestigious floral studios and quickly gained recognition for his creative work.', 
                'His professional approach and passion for flowers inspire our entire team.', 
                'Pavel has also received several awards in the field of floral art, including "Florist of the Year" and "For Outstanding Contributions to the Floral Industry."'
            ]
        },
        {
            img: Anna,
            name: 'Anna',
            job: 'Florist',
            descr: [
                'Anna is an experienced florist with over 6 years of career in the industry.',
                'She began her journey in the art of floral design by working in some of the finest floral studios.',
                'Throughout her career, she has been recognized with several prestigious awards in the field of floral art.',
                'Her unique sense of style and inspiration from nature allow her to create bouquets that are genuine works of art.'
            ]
        },
        {
            img: Maxim,
            name: 'Maxim',
            job: 'Designer',
            descr: [
                'Max is a creative designer with over 11 years of experience in crafting unique concepts for wedding and event bouquets.',
                'His expertise and artistic approach to floral design make him an invaluable part of our team.', 
                'He has also accumulated an impressive collection of awards, including "Floral Designer of the Year" and "For Outstanding Contributions to the Floral Industry."'
            ]
        },
        {
            img: Ekaterina,
            name: 'Ekaterina',
            job: 'Delivery Manager',
            descr: [
                'Ekaterina is our dependable delivery manager with an impressive track record of ensuring the timely delivery of our customers flowers.', 
                'Her professionalism and attention to detail have made our delivery services impeccable.'
            ]
        },
        {
            img: Alex,
            name: 'Alex',
            job: 'Customer Service Specialist',
            descr: [
               'Alex is our friendly and responsive customer service specialist with more than 8 years of experience.',
               'He assists customers in choosing and selecting the perfect bouquets and answers all their questions, ensuring a seamless shopping experience.'
            ]
        }
    ]

    return (
    <div className={styles.about_us}>
        <section className={styles.section_1}>
            <div className={styles.img__wrapper}>
                <img src={sectionImg1} alt="" />
            </div>
            <div className={styles.descr}>
                <p className={styles.title}>About Our Company</p>
                <div className={styles.descr__wrapper}>
                    <p>We are driven by a passion for flowers, creative design, and the desire to bring joy into our customers' lives through exquisite floral arrangements. Our company is more than just a flower shop; it's a place where flowers are transformed into true art.</p>
                    <p>With Us, It's Beautiful!</p>
                    <p>We take pride in the fact that our flowers bring beauty and joy into our customers' lives. Each bouquet we create carries a piece of our passion and dedication. Come to us and let the flowers speak for you!</p>
                </div>
            </div>
        </section>
        <section className={styles.section_2}>
            <p className={styles.title}>Our Beliefs</p>
            <div className={styles.list__wrapper}>
                <div className={styles.list__col}>
                    <p className={styles.list__title}>Our Values</p>
                    <ul className={styles.list__items}>
                        <li className={styles.list__item}>
                            Beauty: We strive to create beautiful bouquets that inspire awe and admiration. Each bouquet we create is a unique work of art.
                        </li>
                        <li className={styles.list__item}>
                            Quality: We select only the freshest and highest-quality flowers for our compositions, ensuring longevity and vibrant colors.
                        </li>
                        <li className={styles.list__item}>
                            Individuality: We understand that each order is unique. We pay attention to every detail to craft a bouquet that perfectly suits the occasion and the recipient.
                        </li>
                        <li className={styles.list__item}>
                            Service: We value our customers and aim to provide outstanding service. Your satisfaction is our top priority.
                        </li>
                    </ul>
                </div>
                <div className={styles.list__col}>
                    <p className={styles.list__title}>Our Services</p>
                    <ul className={styles.list__items}>
                        <li className={styles.list__item}>
                            Custom Bouquets: We create bespoke bouquets for various occasions, from celebrations to everyday joys.
                        </li>
                        <li className={styles.list__item}>
                            Delivery: We offer convenient delivery options to ensure your flowers arrive where you need them, on time and in perfect condition.
                        </li>
                        <li className={styles.list__item}>
                        Wedding and Event Services: We help create a magical atmosphere on your special day with floral compositions tailored to your style. Wedding services are discussed individually with a manager at +380 99 999 99 99.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className={styles.section_3}>
            <div className={styles.signature}>
                <p>“ Together, we create not just bouquets but moments of inspiration and joy. ”</p>
                <p>— Pavlo, lead florist</p>
            </div>
            <div className={styles.img__wrapper}>
                <img src={sectionImg3} alt="" />
            </div>
        </section>
        <section className={styles.section_4}>
            <p className={styles.title}>Our Flower Shop Team</p>
            <div className={styles.team__wrapper}>
                {teamData.map( ({img, name, job, descr}) => (
                    <div className={styles.team__item}>
                        <div className={styles.team__img}>
                            <img src={img} alt="" />
                        </div>
                        <div className={styles.team__text}>
                            <p className={styles.team__name}>{name}</p>
                            <p className={styles.team__job}>{job}</p>
                            <div className={styles.team__descr}>
                                {descr.map( item => (
                                    <p>{item}</p>
                                ) )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.flower}>
                <div className={styles.flower__wrapper}>
                    <img src={Flower} alt="flower" />
                </div>
            </div>
        </section>
    </div>
  )
}
