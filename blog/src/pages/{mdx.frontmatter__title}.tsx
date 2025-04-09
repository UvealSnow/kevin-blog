import { graphql, HeadProps, PageProps } from 'gatsby'
import * as React from 'react'
import MainLayout from '../components/layouts/main'
import Seo from '../components/seo'

interface QueryData {
  mdx: {
    frontmatter: {
      title: string
      date: string
    }
  }
}

const ContentPage = ({ data, children }: PageProps<QueryData>) => {
  return (
    <MainLayout pageTitle={data.mdx.frontmatter.title}>
      {children}
    </MainLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(
      id: { eq: $id }
      frontmatter: { published: { eq: true } }
      internal: { contentFilePath: { regex: "/pages/" } }
    ) {
      frontmatter {
        title
      }
    }
  } 
`

interface HeadInterface extends HeadProps<QueryData>{}
export const Head = ({ data }: HeadInterface) => <Seo title={data.mdx.frontmatter.title} />

export default ContentPage
