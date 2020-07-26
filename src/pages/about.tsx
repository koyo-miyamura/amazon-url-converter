import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const About: React.FC<PageProps<DataProps>> = ({ data }) => (
  <>
    <SEO title="Using TypeScript" />
    <h1>here is about page</h1>
    <p>build time {data.site.buildTime} </p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default About

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
