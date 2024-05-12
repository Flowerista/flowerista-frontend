import { FC, ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss';

interface IPageTransition {
  children: ReactNode;
  location: string;
}

export const PageTransition: FC<IPageTransition> = ({ children, location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <div className={'page'}>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};
