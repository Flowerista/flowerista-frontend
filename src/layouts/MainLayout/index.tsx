import { FC, ReactNode } from 'react';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import WishlistModal from '../../shared/ui/modals/WishlistModal/Wishlist';

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
