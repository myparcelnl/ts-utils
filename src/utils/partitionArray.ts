export const partitionArray = <I>(array: I[] | null | undefined, predicate: (item: I) => boolean): I[][] => {
  return (array ?? []).reduce(
    (acc, value) => {
      acc[predicate(value) ? 0 : 1].push(value);

      return acc;
    },
    [[], []] as I[][],
  );
};
