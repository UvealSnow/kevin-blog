import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface SeoInterface {
  title: string
}

const Seo = ({ title }: SeoInterface) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

  return (
    <title>{title} | { siteMetadata.title }</title>
  )
}

export default Seo
