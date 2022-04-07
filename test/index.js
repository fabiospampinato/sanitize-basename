
/* IMPORT */

import {describe} from 'fava';
import sanitize from '../dist/index.js';
import {TESTS} from './fixtures.js';

/* MAIN */

describe ( 'sanitize', it => {

  it ( 'passes the tests', t => {

    TESTS.forEach ( ([ name, result ]) => {

      t.is ( sanitize ( name ), result );

    });

  });

  it ( 'supports a custom maxLength', t => {

    const name1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt';

    t.is ( sanitize ( name1, { maxLength: 10 } ), 'aaaaaa.txt' );

    const name2 = 'asd.txt';

    t.is ( sanitize ( name2, { maxLength: 3 } ), 'asd' );

  });

});
