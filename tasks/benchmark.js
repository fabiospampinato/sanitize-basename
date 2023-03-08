
/* IMPORT */

import benchmark from 'benchloop';
import sanitize from '../dist/index.js';
import {TESTS} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
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
