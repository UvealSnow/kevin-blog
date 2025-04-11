import type { PluginOptions as GatsbyDefaultPluginOptions, IPluginRefOptions } from 'gatsby'


export interface IPost {

}

export interface iCollection {
  name: string,
  fields: string[],
  filters: Record<string, any>,
}

interface IPluginOptionsKeys {
  directusUrl: string,
  collections: iCollection[],
}

export interface IApiResponse {
  data: IDataItem[]
}

export interface IDataItem {
  id: string
  status: 'published' | 'draft' | 'archived'
  translations: ITranslation[]
}

export interface ITranslation {
  id: number
  languages_code: string
  [key: string]: string | number
}

/**
 * Gatsby expects the plugin options to be of type "PluginOptions" for gatsby-node APIs (e.g. sourceNodes)
 */
export interface IPluginOptionsInternal extends IPluginOptionsKeys, GatsbyDefaultPluginOptions {}

/**
 * These are the public TypeScript types for consumption in gatsby-config
 */
export interface IPluginOptions extends IPluginOptionsKeys, IPluginRefOptions {}
