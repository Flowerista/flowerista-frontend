import { FC, ReactNode } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import WishlistModal from '../../components/Modals/WishlistModal/Wishlist';

export interface IMainLayout {
  children?: ReactNode;
}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <div className={'container'}>
        <Header />
        {children}
      </div>
      <Footer />
      <WishlistModal />
    </div>
  );
};
