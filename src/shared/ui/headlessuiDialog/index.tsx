import { FC, ReactNode } from 'react';
import { Dialog } from '@headlessui/react';

export interface IHeadlessDialog {
  children: ReactNode;
  isShow: boolean;
  handleClose: () => void;
  container: string;
  active: string;
  content: string;
}

export const HeadlessDialog: FC<IHeadlessDialog> = (props) => {
  const { children, isShow, handleClose, content, active, container } = props;
  const handleCloseModal = () => {
    handleClose();
  };
  return (
    <Dialog open={isShow} onClose={handleCloseModal} as={'div'}>
      <div
        aria-hidden="true"
        className={`${container} ${isShow ? active : ''}`}
        onClick={handleCloseModal}
      >
        <div onClick={(e) => e.stopPropagation()} className={content}>
          {children}
        </div>
      </div>
    </Dialog>
  );
};
