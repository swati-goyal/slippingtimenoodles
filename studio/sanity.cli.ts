import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  studioHost: 'slippingtimenoodles',
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
});
