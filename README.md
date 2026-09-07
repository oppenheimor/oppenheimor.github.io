# Oppenheimor

Oppenheimor’s personal digital garden, built with Astro and deployed to GitHub Pages.

The homepage currently includes:

- A responsive personal introduction
- Project, note, writing, about and life panels
- Keyboard-accessible tab navigation
- GitHub and website destinations
- Reduced-motion support

## Development

```sh
npm install
npm run dev
```

## Quality check

```sh
npm run check
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes the static build to [oppenheimor.github.io](https://oppenheimor.github.io).
