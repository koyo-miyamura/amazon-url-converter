import React, { FC } from "react"
import { Link, PageProps } from "gatsby"

import SEO from "../components/seo"

const IndexPage: FC<PageProps> = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about">Go to Other page</Link>
  </>
)

export default IndexPage
