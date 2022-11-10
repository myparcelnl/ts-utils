export type Replace<T, K extends keyof T, TReplace> = Pick<T, Exclude<keyof T, K>> & {[P in K]: TReplace};
