import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../Header/Logo';
import arrow from '../../assets/image/arrow.png';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '../../app/routerConfig.tsx';

export interface ISecondHeader {}

export const SecondHeader: FC<ISecondHeader> = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const goBack = () => () => {
    navigate(getRouteHome());
  };

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
      <button className={styles.arrow} onClick={goBack()}>
        <img src={arrow} alt="arrow" />
        {screenWidth > 376 && <span>back</span>}
      </button>
      <Logo type={'header'} />
      <div></div>
    </header>
  );
};
