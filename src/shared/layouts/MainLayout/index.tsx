import { FC, ReactNode } from 'react';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import { WishlistModal } from '../../../entities/modals';

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
