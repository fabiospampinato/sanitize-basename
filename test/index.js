
/* IMPORT */

import {describe} from 'ava-spec';
import {default as sanitize} from '../dist';
import Tests from './tests';

/* SANITIZE FILE NAME */

describe ( 'sanitize', it => {

  it ( 'passes the tests', t => {

    Tests.forEach ( ([ name, result ]) => {

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
