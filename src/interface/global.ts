import { CSSProperties, ReactNode } from "react";

export interface PropsStyleAndClass {
    className?: string;
    style?: CSSProperties;
}
export interface PropsChildren extends PropsStyleAndClass {
    children?: ReactNode;
}

export interface ModalProps extends PropsChildren{
    isOpen: boolean;
    setOpen: ( _ : boolean) => void;
}

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address: IAddress
}

export interface IAddress {
    city: string | null;
    street: string | null;
    house: string | null;
    entrance: string | null;
    flat: string | null;
}

export interface IPersonalInfo {
    firstName: string;
    lastName: string;
}

export interface IChangePassword {
    currentPassword: string;
    newPassword: string;
}