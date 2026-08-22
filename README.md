# slipping time noodles

A personal atlas for writing, mathematics, engineering, and everything in between.

## Local preview

Install dependencies and start Astro locally:

```sh
npm install
npm run dev
```

Then visit <http://localhost:4321>.

## Deployment

This is an Astro static website. Netlify can deploy it from GitHub with the build command `npm run build` and publish directory `dist`.

## Sanity content admin

The Sanity Studio lives in `studio/` and supports private editing of writing and artwork. Create a project at <https://www.sanity.io/manage>, copy its project ID into a local `.env` file based on `.env.example`, then run:

```sh
cd studio
npm install
npm run dev
```

Sign in with your Sanity account to upload artwork and publish content. Add `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` as Netlify environment variables so the Astro build can read published artwork. Deploy the Studio separately with `npm run deploy` from `studio/`.

## Project structure

```text
.
├── src/
│   ├── components/
│   ├── lib/
│   └── pages/
├── studio/
│   └── schemaTypes/
├── netlify.toml
├── package.json
├── package-lock.json
└── README.md
```