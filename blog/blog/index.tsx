import * as React from 'react'
import MainLayout from '../../components/layouts/main'
import Seo from '../../components/seo'
import { graphql, HeadProps, PageProps } from 'gatsby'
import PostList from '../../components/post-list'
import { dummyPosts } from '..'

interface QueryData {
  allMdx: {
    nodes: {
      id: string
      frontmatter: {
        date: string
        title: string
      }
    }[]
  }
}

const Index = ({ data }: PageProps<QueryData>) => {
  console.log(data)
  const { allMdx: { nodes } } = data
  return (
    <MainLayout pageTitle="All blog posts">
      <PostList posts={dummyPosts} />
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
        }
        id
      }
    }
  }
`

interface HeadInterface extends HeadProps<QueryData> {}
export const Head = ({ data }: HeadInterface) => <Seo title="All blog posts" />

export default Index
