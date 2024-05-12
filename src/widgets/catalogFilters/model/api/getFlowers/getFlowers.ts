import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceFlower } from '../../types/flower.ts';

const getFlowersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFlowers: build.query<InterfaceFlower[], void>({
      query: () => ({
        url: `/flower`
      })
    })
  })
});

export const useGetFlowers = getFlowersApi.useGetFlowersQuery;
