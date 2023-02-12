
/* IMPORT */

import {FALLBACK_NAME, MAX_LENGTH, REGEXES} from './constants';
import type {Options} from './types';

/* MAIN */

const sanitize = ( name: string, options?: Partial<Options> ): string => {

  /* REGEXES */

  for ( let i = 0, l = REGEXES.length; i < l; i++ ) {

    const [re, replacement] = REGEXES[i];

    name = name.replace ( re, replacement );

    if ( !name.length ) return FALLBACK_NAME;

  }

  /* TRIMMING */

  name = name.trim ();

  if ( !name.length ) return FALLBACK_NAME;

  /* MAX LENGTH */

  const maxLength = options?.maxLength ?? MAX_LENGTH;
  const extraLength = name.length - maxLength;

  if ( extraLength > 0 ) {

    const parts = name.split ( /\./g );

    if ( parts.length && parts[0].length >= extraLength ) {

      parts[0] = parts[0].slice ( 0, - extraLength );
      name = parts.join ( '.' );

    } else {

      name = name.slice ( 0, - extraLength );

    }

  }

  return name;

};

/* EXPORT */

export default sanitize;
