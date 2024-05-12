import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';

const addCardToWishlist = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    addWishlist: build.mutation<void, number>({
      query: (cardId) => ({
        url: `/user/wishlist`,
        method: 'POST',
        body: {
          id: cardId
        }
      })
    })
  })
});

export const useAddWishlistMutation = addCardToWishlist.useAddWishlistMutation;
