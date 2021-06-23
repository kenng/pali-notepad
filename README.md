# Introduction

A PWA app to make typing Pāli a breeze.

This app has following features

-   installable on mobile phone and desktop
-   work offline
-   automatically saving draft to local storage
-   able to input Diacritics using button or keyboard shortcut

## Demo Site

[Pali Notepad Live](https://kenng.github.io/pali-notepad)

## Keyboard Shortcut for Diacritics

NOTE: some shortcut key only work in full screen mode, for example `Ctrl + N` will not work when browser is not in full screen mode.

### Tilde

Letters: `ā, Ā, ī, Ī, ñ, Ñ, ū, Ū`
Keyboard shortcut: `Ctrl + Alt + <letter>`
Example: `Ctrl + Alt + u` will input `ū`

### Overdot

Letters: `ṅ, 'Ṅ`
Keyboard shortcut: `Alt + <letter>`
Example: `Alt + n` will input `ṅ` (Note: only work in full screen mode)

### Underdot

Letters: `ḍ, Ḍ, ḷ, Ḷ, ṃ, Ṃ, ŋ, ṇ, Ṇ, ṭ, Ṭ`
Keyboard shortcut: `Ctrl + <letter>`
Example: `Ctrl + m` will input `ṃ`

## References

[https://www.accesstoinsight.org/lib/diacritics.html](https://www.accesstoinsight.org/lib/diacritics.html)
[http://www.sanskritweb.net/fonts/index.html#BPS](http://www.sanskritweb.net/fonts/index.html#BPS)

# Development

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build -m pwa
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
