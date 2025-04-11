import type { IPluginOptions } from '@kevhah/gatsby-plugin-directus-source'

const FIELDS = [
  "id",
  "status",
  "translations.*", 
]

const DEFAULT_FILTERS = {
  status: {
    _eq: 'published',
  },
}

const COLLECTIONS = [
  {
    name: 'posts',
    fields: FIELDS,
    filters: DEFAULT_FILTERS,
  },
]

export { COLLECTIONS }