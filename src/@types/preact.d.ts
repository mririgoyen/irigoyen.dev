import 'preact';

// See: https://github.com/preactjs/preact-router/issues/353
declare module 'preact' {
  interface PreactDOMAttributes {
    native?: boolean;
  }
}
