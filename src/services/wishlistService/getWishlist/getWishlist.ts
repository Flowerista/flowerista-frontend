import { IFlowerCard } from '../../../interface/flower';
import { rtkApiAuth } from '../../../http/rtkApAuthi';

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
