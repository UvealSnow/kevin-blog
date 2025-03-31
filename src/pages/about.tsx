import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layouts/main'

const About = (_: PageProps) => {
  const pageTitle = 'About me'

  return (
    <Layout pageTitle={pageTitle}>
      <p>Loquita</p>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <title>About me Page</title>
)

export default About
