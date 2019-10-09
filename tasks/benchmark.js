
/* IMPORT */

const benchmark = require ( 'benchloop' ),
      {default: sanitize} = require ( '../dist' ),
      Tests = require ( '../test/tests' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 10000,
  log: 'compact'
});

benchmark ({
  name: 'sanitize',
  fn: () => {
    Tests.forEach ( ([ name ]) => {
      sanitize ( name );
    });
  }
});

benchmark.summary ();
