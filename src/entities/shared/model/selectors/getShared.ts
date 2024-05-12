import { buildSelector } from '../../../../shared/lib/store';

export const [userShared, getShared] = buildSelector((state) => state.shared);
