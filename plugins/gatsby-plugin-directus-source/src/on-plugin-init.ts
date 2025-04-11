import { ERROR_CODES } from './consts';
import type { GatsbyNode } from 'gatsby'

export const onPluginInit: GatsbyNode[`onPluginInit`] = async (gatsbyApi) => {
  const { reporter } = gatsbyApi
  reporter.setErrorMap({
    [ERROR_CODES.NO_DIRECTUS_URL]: {
      text: (_) => `No directusUrl found in plugin options. Please set the directusUrl option.`,
      level: 'ERROR',
      category: 'THIRD_PARTY',
    }
  })
}
