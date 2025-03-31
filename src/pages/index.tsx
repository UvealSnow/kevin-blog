import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from '../components/layouts/main'

const Index = (_: PageProps) => {
  const pageTitle = 'Home'

  return (
    <Layout pageTitle={pageTitle}>
      <p>Loquita</p>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <title>Home Page</title>
)

export default Index
