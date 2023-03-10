export function autoSpy<T>(obj: new (...args: any) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as SpyOf<T>;

  Object.getOwnPropertyNames(obj.prototype).forEach((key) => {
    // @ts-ignore
    res[key] = jasmine.createSpy(key);
  });
  return res;
}

export type SpyOf<T> = T & Partial<{ [k in keyof T]: T[k] extends (...args: any[]) => any ? jasmine.Spy : T[k] }>;
