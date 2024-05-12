import { CSSProperties, ReactNode } from 'react';

export interface PropsStyleAndClass {
  className?: string;
  style?: CSSProperties;
}

export interface PropsChildren extends PropsStyleAndClass {
  children?: ReactNode;
}

export interface ModalProps extends PropsChildren {
  isOpen: boolean;
  setOpen: (_: boolean) => void;
}
