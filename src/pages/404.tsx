import React, { FC } from "react"

import { PageProps } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage: FC<PageProps> = () => (
  <>
    <SEO />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
