import * as React from 'react'
import { graphql, HeadProps, type PageProps, navigate } from 'gatsby'
import Seo from '../../components/seo'
import MainLayout from '../../components/layouts/main'

interface QueryData {
  mdx: {
    frontmatter: {
      title: string
      date: string
    }
  } | null
}

const Post = ({ data, children }: PageProps<QueryData>) => {
  React.useEffect(() => {
    if (!data.mdx) {
      navigate('/404')
    }
  }, [data.mdx])

  if (!data.mdx) {
    return null
  }

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
export const Head = ({ data }: HeadInterface) => {
  if (!data.mdx) {
    return <Seo title="Post not found" />
  }
  return <Seo title={data.mdx.frontmatter.title} />
}

export default Post
