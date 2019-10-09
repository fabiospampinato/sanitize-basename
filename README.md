# Sanitize Basename

Sanitize a file name for cross-platform validity.

Instead of stripping out forbidden characters, like other libraries do, this library tries to replace them with similar-looking characters, trying to mainting maximum fidelity while still outputting valid file names for all platforms.

## Install

```sh
npm install --save sanitize-basename
```

## Usage

```ts
import sanitize from 'sanitize-basename';

sanitize ( '../foo' ); // => 'foo'
sanitize ( '<>:"/\\|?*.txt' ); // => '‹›꞉ˮ⁄∖ǀʔ⁎.txt'
sanitize ( 'aaaaaaaaaaaaaaaaa.txt', { maxLength: 10 } ); // => aaaaaa.txt
```

## Related

- [unsanitize-basename](https://github.com/fabiospampinato/unsanitize-basename): Unsanitize a file name, the inverse of this library.

## License

MIT © Fabio Spampinato
