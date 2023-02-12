
/* IMPORT */

import benchmark from 'benchloop';
import sanitize from '../dist/index.js';
import {TESTS} from '../test/fixtures.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 10_000
});

benchmark ({
  name: 'sanitize',
  fn: () => {
    TESTS.forEach ( ([ name ]) => {
      sanitize ( name );
    });
  }
});

benchmark.summary ();
