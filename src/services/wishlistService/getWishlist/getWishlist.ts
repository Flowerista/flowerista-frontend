import { IFlowerCard } from '../../../shared/types/flower.ts';
import { rtkApiAuth } from '../../../shared/api/rtkApAuthi.ts';

const getWishlistApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    getWishlist: build.query<IFlowerCard[], void>({
      query: () => ({
        url: `/user/wishlist`
      })
    })
  })
});

export const useGetWishlistQuery = getWishlistApi.useGetWishlistQuery;
