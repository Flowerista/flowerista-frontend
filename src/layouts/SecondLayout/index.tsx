import { FC, ReactNode } from 'react';
import { Footer } from '../../widgets/footer';
import { SecondHeader } from '../../widgets/secondHeader';

export interface IMainLayout {
  children?: ReactNode;
}

export const SecondLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      <div className={'container'}>
        <SecondHeader />
        {children}
      </div>
      <Footer />
    </div>
  );
};
