import { buildSelector } from '../../../../shared/lib/store';

export const [useRecentlyViewed, getRecentlyViewed] = buildSelector(
  (state) => state.recentlyViewed
);
