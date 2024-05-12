import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceFlower } from '../../types/flower.ts';

const getColorsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getColors: build.query<InterfaceFlower[], void>({
      query: () => ({
        url: '/color'
      })
    })
  })
});

export const useGetColors = getColorsApi.useGetColorsQuery;
