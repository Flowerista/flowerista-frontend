import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IFlower } from '../../../shared/types/flower.ts';

const getColorsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getColors: build.query<IFlower[], void>({
      query: () => ({
        url: '/color'
      })
    })
  })
});

export const useGetColors = getColorsApi.useGetColorsQuery;
