
/* MAIN */

type Options = {
  maxLength?: number
};

type Replacement = string | (( match: string ) => string);

/* EXPORT */

export type {Options, Replacement};
