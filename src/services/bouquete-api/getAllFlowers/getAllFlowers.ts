import { rtkApi } from '../../../http/rtkApi';
import { IAllFlower, IFetchAllFlowers } from '../../../interface/flower';

const getAllFlowersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFlowers: build.query<IAllFlower, IFetchAllFlowers>({
      query: (data) => ({
        url: `/bouquete?page=${data.page}
        			${data.flowerIds && `&flowerIds=${data.flowerIds}`}
        			${data.colorIds && `&colorIds=${data.colorIds}`}
        			${data.minPrice && data.minPrice > data.min ? `&minPrice=${data.minPrice}` : ''}
        			${data.maxPrice && data.maxPrice < data.max ? `&maxPrice=${data.maxPrice}` : ''}
        			${data.sortByNewest ? `&sortByNewest=${data.sortByNewest}` : ''}
        			${data.sortByPriceHighToLow ? `&sortByPriceHighToLow=${data.sortByPriceHighToLow}` : ''}
        			${data.sortByPriceLowToHigh ? `&sortByPriceLowToHigh=${data.sortByPriceLowToHigh}` : ''}
        			`
      })
    })
  })
});

export const useGetAllFlowers = getAllFlowersApi.useGetAllFlowersQuery;
