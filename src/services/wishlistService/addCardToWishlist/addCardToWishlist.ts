import { rtkApiAuth } from '../../../http/rtkApAuthi';

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
