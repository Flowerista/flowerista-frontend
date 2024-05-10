import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/store';
import { BsXLg } from 'react-icons/bs';
import { useModalActions } from '../../../store/modals/modals.slice';

import styles from './styles.module.scss';
import { Sidebar } from '../../Sidebar/Sidebar';

interface SidebarModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SidebarModal: FC<SidebarModalProps> = ({ className }) => {
  const { modals } = useAppSelector((state) => state.modals);
  const { setSidebarModalOpen } = useModalActions();
  const onClose = () => {
    setSidebarModalOpen(false);
  };

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
      setSidebarModalOpen(false);
    };
  }, []);

  if (!modals.sidebarModalOpen) {
    return null;
  }

  return (
    <div className={classNames(styles.modal)} onClick={onClose}>
      <div
        className={classNames(styles.modal__wrapper, className)}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.modal__title}>Profile</h3>
        <button onClick={onClose} className={styles.modal__close}>
          <BsXLg size={24} />
        </button>
        <Sidebar />
      </div>
    </div>
  );
};
