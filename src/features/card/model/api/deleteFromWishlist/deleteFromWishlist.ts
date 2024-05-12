import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';

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
