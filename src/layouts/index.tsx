import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"

import Header from "../components/header"
import { SiteTitleQuery } from "../../types/graphql-types"

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title || ""} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} koyo-miyamura</footer>
      </div>
    </>
  )
}

export default Layout
