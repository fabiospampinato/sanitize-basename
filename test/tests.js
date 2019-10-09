
/* TESTS */

const Tests = [
  /* CONTROL CHARACTERS */
  ['foo\u0000bar', 'foobar'],
  ['foo\u0080bar', 'foobar'],
  ['foo\u0000bar', 'foobar'],
  ['foo\u001Fbar', 'foobar'],
  /* RELATIVE PATHS */
  ['.', 'unnamed'],
  ['..', 'unnamed'],
  ['...', 'unnamed'],
  ['../', 'unnamed'],
  ['../../', 'unnamed'],
  ['.foo', '.foo'],
  ['..foo', '..foo'],
  ['../foo', 'foo'],
  /* WINDOWS SPECIAL NAMES */
  ['con', 'unnamed'],
  ['cona', 'cona'],
  ['AUX', 'unnamed'],
  ['com0', 'unnamed'],
  ['com10', 'com10'],
  /* FORBIDDEN CHARACTERS */
  ['<>:"/\\|?*foo', '‹›꞉ˮ⁄∖ǀʔ⁎foo'],
  ['foo<>:"/\\|?*', 'foo‹›꞉ˮ⁄∖ǀʔ⁎'],
  ['foo<>:"/\\|?*bar', 'foo‹›꞉ˮ⁄∖ǀʔ⁎bar'],
  /* TRIMMING */
  ['   foo bar   ', 'foo bar'],
  ['   ', 'unnamed']
];

/* EXPORT */

module.exports = Tests;
