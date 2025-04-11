import type { GatsbyConfig } from 'gatsby'
import { COLLECTIONS } from './cms-config'
import { IPluginOptions } from '@kevhah/gatsby-plugin-directus-source'

const directusUrl = process.env.CMS_URL
const collections = COLLECTIONS

if (!directusUrl) {
  throw new Error('CMS_URL is not set')
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: process.env.SITE_NAME,
    siteUrl: process.env.SITE_URL,
    description: process.env.SITE_DESCRIPTION
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    {
      resolve: '@kevhah/gatsby-plugin-directus-source',
      options: {
        directusUrl,
        collections,
      } satisfies IPluginOptions
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      }
    }
  ],
}

export default config
