import { FC } from 'react';
import styles from './styles.module.scss';
import sectionImg1 from '../../../shared/assets/image/about_us_page/section_1.png';
import sectionImg3 from '../../../shared/assets/image/about_us_page/section_3.png';
import Pavlo from '../../../shared/assets/image/about_us_page/team/pavlo.png';
import Anna from '../../../shared/assets/image/about_us_page/team/anna.png';
import Maxim from '../../../shared/assets/image/about_us_page/team/maxim.png';
import Ekaterina from '../../../shared/assets/image/about_us_page/team/ekaterina.png';
import Alex from '../../../shared/assets/image/about_us_page/team/alex.png';
import Flower from '../../../shared/assets/image/about_us_page/flower.png';
import { useTranslation } from 'react-i18next';

const AboutUs: FC = () => {
  const { t } = useTranslation();
  const teamData = [
    {
      img: Pavlo,
      name: t('aboutUs.team.person1.name'),
      job: t('aboutUs.team.person1.position'),
      descr: [
        t('aboutUs.team.person1.text1'),
        t('aboutUs.team.person1.text2'),
        t('aboutUs.team.person1.text3'),
        t('aboutUs.team.person1.text4')
      ]
    },
    {
      img: Anna,
      name: t('aboutUs.team.person2.name'),
      job: t('aboutUs.team.person2.position'),
      descr: [
        t('aboutUs.team.person2.text1'),
        t('aboutUs.team.person2.text2'),
        t('aboutUs.team.person2.text3'),
        t('aboutUs.team.person2.text4')
      ]
    },
    {
      img: Maxim,
      name: t('aboutUs.team.person3.name'),
      job: t('aboutUs.team.person3.position'),
      descr: [
        t('aboutUs.team.person3.text1'),
        t('aboutUs.team.person3.text2'),
        t('aboutUs.team.person3.text3')
      ]
    },
    {
      img: Ekaterina,
      name: t('aboutUs.team.person4.name'),
      job: t('aboutUs.team.person4.position'),
      descr: [t('aboutUs.team.person4.text1'), t('aboutUs.team.person4.text2')]
    },
    {
      img: Alex,
      name: t('aboutUs.team.person5.name'),
      job: t('aboutUs.team.person5.position'),
      descr: [t('aboutUs.team.person5.text1'), t('aboutUs.team.person5.text2')]
    }
  ];

  return (
    <div data-testid="AboutPage" className={styles.about_us}>
      <section className={styles.section_1}>
        <div className={styles.img__wrapper}>
          <img src={sectionImg1} alt="team" />
        </div>
        <div className={styles.descr}>
          <p className={styles.title}>{t('aboutUs.company.title')}</p>
          <div className={styles.descr__wrapper}>
            <p>{t('aboutUs.company.text1')}</p>
            <p>{t('aboutUs.company.text2')}</p>
            <p>{t('aboutUs.company.text3')}</p>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <p className={styles.title}>{t('aboutUs.beliefs.beliefs')}</p>
        <div className={styles.list__wrapper}>
          <div className={styles.list__col}>
            <p className={styles.list__title}>
              {t('aboutUs.beliefs.values.title')}
            </p>
            <ul className={styles.list__items}>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.values.text1')}
              </li>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.values.text2')}
              </li>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.values.text3')}
              </li>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.values.text4')}
              </li>
            </ul>
          </div>
          <div className={styles.list__col}>
            <p className={styles.list__title}>
              {t('aboutUs.beliefs.services.title')}
            </p>
            <ul className={styles.list__items}>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.services.text1')}
              </li>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.services.text2')}
              </li>
              <li className={styles.list__item}>
                {t('aboutUs.beliefs.services.text3')}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.signature}>
          <p>{t('aboutUs.text1')}</p>
          <p>{t('aboutUs.text2')}</p>
        </div>
        <div className={styles.img__wrapper}>
          <img src={sectionImg3} alt="team" />
        </div>
      </section>
      <section className={styles.section_4}>
        <p className={styles.title}>{t('aboutUs.team.title')}</p>
        <div className={styles.team__wrapper}>
          {teamData.map(({ img, name, job, descr }, index) => (
            <div key={index} className={styles.team__item}>
              <div className={styles.team__img}>
                <img src={img} alt="" />
              </div>
              <div className={styles.team__text}>
                <p className={styles.team__name}>{name}</p>
                <p className={styles.team__job}>{job}</p>
                <div className={styles.team__descr}>
                  {descr.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
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
  );
};
export default AboutUs;
