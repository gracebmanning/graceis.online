import {createClient} from '@sanity/client';

export default createClient({
  projectId: process.env.REACT_APP_SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2025-07-26"
});