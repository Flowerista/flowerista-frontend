import { rtkApi } from '../../../http/rtkApi';
import { IFlower } from '../../../interface/flower';

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
