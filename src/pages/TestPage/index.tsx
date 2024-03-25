import { useTranslation } from "react-i18next"
import { CatalogBox } from "../../components/CatalogBox"
import { Bestsellers } from "../../components/SectionsFlower/Bestsellers/Bestsellers"
import { Sale } from "../../components/SectionsFlower/Sale/Sale"
import { HomeSwiper } from "../HomePage/HomeSwiper"

import styles from './styles.module.scss'
import { AboutUs } from "../HomePage/AboutUs/AboutUs"
import { Reviews } from "../HomePage/Reviews/Reviews"

export const TestPage = () => {
  const {t} = useTranslation()
  return (
    <div>
        <HomeSwiper/>
        <div className={styles.home__catalog}>
          <CatalogBox text={t("mainPage.box1")}/>
          <CatalogBox text={t("mainPage.box2")}/>
        </div>
        <Bestsellers/>
        <Sale/>
        <AboutUs/>
        <Reviews/>
    </div>
  )
}