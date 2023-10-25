import React, {FC, ReactNode} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './styles.scss'

interface IPageTransition {
	children: ReactNode;
	location:string
}

const PageTransition:FC<IPageTransition>= ({ children, location }) => {
	console.log(location)
	return (
		 <TransitionGroup>
			 <CSSTransition
				  key={location}
				  timeout={300}
				  classNames="page"
				  unmountOnExit
			 >
			 <div className={"page"}>
				 {children}
			 </div>
			 </CSSTransition>
		 </TransitionGroup>
	);
};

export default PageTransition;
