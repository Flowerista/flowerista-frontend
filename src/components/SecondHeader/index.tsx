import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../Header/Logo';
import arrow from '../../assets/image/arrow.png';

export interface ISecondHeader {}

export const SecondHeader: FC<ISecondHeader> = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className={styles.container}>
      <div className={styles.arrow}>
        <img src={arrow} alt="arrow" />
        {screenWidth > 376 && <span>back</span>}
      </div>
      <Logo type={'header'} />
      <div></div>
    </header>
  );
};
