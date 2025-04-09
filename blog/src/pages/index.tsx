import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import type { Post } from "../components/post"

import Layout from '../components/layouts/main'
import PostList from "../components/post-list"
import Seo from "../components/seo"

export const dummyPosts: Post[] = [
  {
    uid: '1',
    uri: 'post-1',
    title: 'Post 1',
    brief: 'Velit officia reprehenderit consequat occaecat aliqua voluptate aliqua. Tempor mollit exercitation nostrud quis ex sint. Cillum adipisicing et mollit ipsum cupidatat occaecat duis est minim laborum ex occaecat aute. Cupidatat veniam proident cillum tempor velit do sint in quis occaecat do consequat deserunt culpa. Elit cillum eiusmod ad elit consectetur enim ea id tempor. Et consectetur exercitation qui occaecat culpa pariatur consequat nostrud ex.',
    thumbnail: undefined,
    date: '01/01/2025',
    author: {
      name: 'Carolina Rivera',
      avatar: 'https://placehold.co/150',
      bio: 'Voluptate consectetur labore enim in cupidatat nostrud.',
      uri: '/author/carolina-rivera'
    }
  },
  {
    uid: '2',
    uri: 'post-2',
    title: 'Post 2',
    brief: 'Sint ut et veniam nisi aliqua. Ut Lorem ad id est velit cillum excepteur. Excepteur fugiat elit ad do incididunt ipsum irure magna aliquip. Excepteur nulla laborum proident voluptate laboris fugiat incididunt excepteur.',
    thumbnail: 'https://placehold.co/150',
    date: '02/01/2025',
    author: {
      name: 'Kevin Avila',
      avatar: 'https://placehold.co/150',
      bio: 'Ipsum voluptate enim culpa ipsum ullamco sit sunt.',
      uri: '/author/kevin-avila'
    }
  }
]

const Index = (_: PageProps) => {
  const pageTitle = 'Home'

  return (
    <Layout pageTitle={pageTitle}>
      <PostList posts={dummyPosts} />
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Home" />

export default Index
