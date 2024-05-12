import { buildSelector } from '../../../../shared/lib/store';

export const [useModals, getModals] = buildSelector(
  (state) => state.modals.modals
);
