import { rtkApiAuth } from '../../../http/rtkApAuthi';

const removeFromWishlist = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    removeCardFromWishlist: build.mutation<void, number>({
      query: (cardId) => ({
        url: `/user/wishlist`,
        method: 'DELETE',
        body: {
          id: cardId
        }
      })
    })
  })
});

export const useRemoveCardFromWishlist =
  removeFromWishlist.useRemoveCardFromWishlistMutation;
