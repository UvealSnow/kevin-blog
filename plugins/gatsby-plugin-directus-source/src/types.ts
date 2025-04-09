import type { PluginOptions as GatsbyDefaultPluginOptions, IPluginRefOptions } from 'gatsby'


export interface IPost {

}

interface IPluginOptionsKeys {
  // TODO: Set your plugin options here
  [key: string]: any
}

/**
 * Gatsby expects the plugin options to be of type "PluginOptions" for gatsby-node APIs (e.g. sourceNodes)
 */
export interface IPluginOptionsInternal extends IPluginOptionsKeys, GatsbyDefaultPluginOptions {}

/**
 * These are the public TypeScript types for consumption in gatsby-config
 */
export interface IPluginOptions extends IPluginOptionsKeys, IPluginRefOptions {}
