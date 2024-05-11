import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IFlower } from '../../../shared/types/flower.ts';

const getFlowersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFlowers: build.query<IFlower[], void>({
      query: () => ({
        url: `/flower`
      })
    })
  })
});

export const useGetFlowers = getFlowersApi.useGetFlowersQuery;
