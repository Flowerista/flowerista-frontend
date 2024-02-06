import {FC, ReactNode, useState} from 'react';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import WishlistModal from '../../components/Modals/WishlistModal/Wishlist';

export interface IMainLayout {
	children?:ReactNode
}

export const MainLayout: FC<IMainLayout> = ({children}) => {
	const [wishlistModalOpen, setWishlistModalOpen] = useState(true)
	return (
		 <div>
				<div className={"container"}>
					<Header/>
					{children}
				</div>
			 <Footer/>
			 {/* <WishlistModal isOpen={wishlistModalOpen} setOpen={setWishlistModalOpen}/> */}
		 </div>
	);
};

