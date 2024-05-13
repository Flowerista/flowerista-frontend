import { FC, ReactNode } from 'react';
import { SecondHeader } from '../../../widgets/secondHeader';
import { Footer } from '../../../widgets/footer';

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
