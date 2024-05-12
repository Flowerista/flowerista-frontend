import { CSSProperties, FC, ReactNode, useEffect } from 'react';
import styles from './styles.module.scss';
import { BsArrowLeft, BsXLg } from 'react-icons/bs';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  style,
  className,
  isOpen = true,
  onClose
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeModal = (e: any) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.body.addEventListener('keyup', (e: any) => closeModal(e));

    return () => {
      document.body.removeEventListener('keyup', closeModal);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classNames(styles.modal)} onClick={onClose}>
      <div
        className={classNames(styles.modal__wrapper, className)}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className={styles.modal__close}
          onClick={onClose}
          tabIndex={isOpen ? 1 : -1}
        >
          <div className={styles.btn_big}>
            <BsArrowLeft size={24} />
            {t('register.successes.btn1')}
          </div>
          <div className={styles.btn_small}>
            <BsXLg size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};
