import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { InterfaceFlowerCard } from '../../types/InterfaceFlowerCard.ts';

const getWishlistApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    getWishlist: build.query<InterfaceFlowerCard[], string>({
      query: (wishlist) => ({
        url: `/user/${wishlist}`
      })
    })
  })
});

export const useGetWishlistQuery = getWishlistApi.useGetWishlistQuery;
