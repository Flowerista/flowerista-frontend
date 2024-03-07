import { ButtonHTMLAttributes, FC, useState } from "react"
import classNames from "classnames"
import s from './styles.module.scss'

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const HeaderButton: FC<HeaderButtonProps> = (props) => {
    const {className, ...otherProps} = props
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(!open)
    }
    return (
        <button 
            type="button"
            className={classNames(s.headerButton, className, { [s.open]: open })}
            onClick={() => onClose()}
            {...otherProps}>
            <div className={s.line}></div>
        </button>
    )
}