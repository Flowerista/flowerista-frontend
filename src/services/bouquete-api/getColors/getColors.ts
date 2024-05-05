import { rtkApi } from '../../../http/rtkApi';
import { IFlower } from '../../../interface/flower';

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
