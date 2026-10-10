# Alexa Lazarus's CV

One page at [cv.alexa-lazar.us](https://cv.alexa-lazar.us), built with SvelteKit and Bootstrap and
edited with [Frame](https://github.com/Fermain/frame.ferma.in) at `/admin`. The content is the
JSON under `src/content`.

```sh
pnpm install   # needs a GitHub token that can read the @fermain packages
pnpm dev
```

Merging to `main` builds the site and publishes it to GitHub Pages. Publishing from the editor
does the same, since it merges to `main`.
