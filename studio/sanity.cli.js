import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // eslint-disable-next-line no-undef
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: "production",
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: 'graceisonline'
})
