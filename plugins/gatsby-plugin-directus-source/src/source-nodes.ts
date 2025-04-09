import { type GatsbyNode } from 'gatsby'

export const sourceNodes: GatsbyNode['sourceNodes'] = async (gatsbyApi) => {
  const { reporter } = gatsbyApi
  reporter.info('Starting to source nodes from Directus...')
}
