type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
// eslint-disable-next-line
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
