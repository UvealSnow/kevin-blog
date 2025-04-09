import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/layouts/main"
import Seo from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <MainLayout pageTitle="404 - Not found">
      <p>You should probably go back to safety!</p>
      <Link to="/">Back to home</Link>
    </MainLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <Seo title="404" />
