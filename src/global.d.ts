declare module '*.module.css' {
  interface ClassNames {
    [className: string]: string;
  }

  const classNames: ClassNames;
  export = classNames;
}

declare global {
  interface ObjectConstructor {
      groupBy<T, K>(
          items: T[],
          callback: (item: T) => K
      ): Record<K, T[]>;
  }
}

export { };
