import { fetchREST } from './utils'
import type { GatsbyNode } from 'gatsby'
import type { IApiResponse, IDataItem, IPluginOptions, iCollection } from './types'

export const sourceNodes: GatsbyNode['sourceNodes'] = async (gatsbyApi, pluginOptions) => {
  const { reporter, actions, createNodeId } = gatsbyApi
  reporter.info('Starting to source nodes from Directus...')

  const { directusUrl, collections } = pluginOptions as IPluginOptions
  if (!directusUrl) {
    throw new Error('directusUrl is not set')
  }

  const fetchFactory = <T>(collection: iCollection) => {
    const { name, ...query } = collection
    return fetchREST<T>(`${directusUrl}/items/${name}`, query)
  }

  const createNode = (entries: [string, IApiResponse][]) => {
    entries.flatMap(([collection, response]) => 
      response.data.flatMap((item) =>
        item.translations.map((translation) => ({
          ...translation,
          id: createNodeId(`${item.id}-${translation.languages_code}`),
          internal: {
            type: collection[0].toUpperCase() + collection.slice(1),
            contentDigest: gatsbyApi.createContentDigest(translation)
          }
        }))
      )
    ).forEach(n => actions.createNode(n))
  }

  const collectionsMap = await Promise.all(
    collections.map(async (collection) => [
      collection.name,
      await fetchFactory<IApiResponse>(collection)
    ])
  ) as [string, IApiResponse][]

  createNode(collectionsMap)
}
