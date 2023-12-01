import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Buttons/Button'
import { Title } from '../../../components/Title/Title'
import { DataRoute } from '../../../data/routes'

import Flower from '../../../assets/image/restoring_access/restoring_success.png'
import styles from './styles.module.scss'

export const RestoringAccessSuccess: FC = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(DataRoute.Home)
    }
  return (
    <div className={styles.restoring}>
        <div className={styles.restoring__wrapper}>
            <Title text='Password Recovery'/>
            <div className={styles.restoring__descr}>
                We have sent you a link to your email, which will take you to your profile and allow you to change your password.
            </div>
            <Button text='Go to main page' onClick={handleClick} style={{marginTop: '50px'}}/>
        </div>
        <div className={styles.img}>
            <img src={Flower} alt="flower" />
        </div>
    </div>
  )
}
