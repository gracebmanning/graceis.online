import {createClient} from '@sanity/client';

export default createClient({
  projectId: process.env.REACT_APP_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_STUDIO_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: process.env.REACT_APP_SANITY_STUDIO_API_VERSION
});