
/* MAIN */

type Options = {
  maxLength?: number
};

type Replacement = ( match: string ) => string;

/* EXPORT */

export type {Options, Replacement};
