import { buildSelector } from '../../../../shared/lib/store';

export const [useCheckout, getCheckout] = buildSelector(
  (state) => state.checkout
);
export const [useCity, getCity] = buildSelector(
  (state) => state.checkout?.city
);
export const [useEntrance, getEntrance] = buildSelector(
  (state) => state.checkout?.entrance
);
export const [useType, getType] = buildSelector(
  (state) => state.checkout?.type
);
export const [useTime, getTime] = buildSelector(
  (state) => state.checkout?.time
);
export const [useDate, getDate] = buildSelector(
  (state) => state.checkout?.date
);
export const [useFlat, getFlat] = buildSelector(
  (state) => state.checkout?.flat
);
export const [useHouse, getHouse] = buildSelector(
  (state) => state.checkout?.house
);
export const [useStreet, getStreet] = buildSelector(
  (state) => state.checkout?.street
);
