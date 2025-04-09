import * as React from 'react'
import { graphql, HeadProps, type PageProps } from 'gatsby'
import Seo from '../../components/seo'
import MainLayout from '../../components/layouts/main'

interface QueryData {
  mdx: {
    frontmatter: {
      title: string
      date: string
    }
  }
}

const Post = ({ data, children }: PageProps<QueryData>) => {
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
      internal: { contentFilePath: { regex: "/posts/" } }
    ) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

interface HeadInterface extends HeadProps<QueryData>{}
export const Head = ({ data }: HeadInterface) => <Seo title={data.mdx.frontmatter.title} />

export default Post
