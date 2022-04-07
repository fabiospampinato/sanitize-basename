
/* IMPORT */

import type {Replacement} from './types';

/* MAIN */

const FALLBACK_NAME = 'unnamed';

const MAX_LENGTH = 128;

const REPLACEMENT_CHARACTERS = {
  '<': '‹', // 0x2039 - SINGLE LEFT-POINTING ANGLE QUOTATION MARK
  '>': '›', // 0x203A - SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
  ':': '꞉', // 0xA789 - MODIFIER LETTER COLON
  '"': 'ˮ', // 0x02EE - MODIFIER LETTER DOUBLE APOSTROPHE
  '/': '⁄', // 0x2044 - FRACTION SLASH
  '\\': '∖', // 0x2216 - SET MINUS
  '|': 'ǀ', // 0x01C0 - LATIN LETTER DENTAL CLICK
  '?': 'ʔ', // 0x0294 - LATIN LETTER GLOTTAL STOP
  '*': '⁎' // 0x204E - LOW ASTERISK
};

const REGEXES: [RegExp, Replacement][] = [
  /* CONTROL CHARACTERS */
  [/[\u0000-\u001F\u0080-\u009F]/g, ''],
  /* RELATIVE PATHS */
  [/^(\.+[\/\\]+)+|^\.+$/g, ''],
  /* WINDOWS SPECIAL NAMES */
  [/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i, ''],
  /* FORBIDDEN CHARACTERS */
  [/[<>:"/\\|?*]/g, char => REPLACEMENT_CHARACTERS[char] || '']
];

/* EXPORT */

export {FALLBACK_NAME, MAX_LENGTH, REGEXES};
