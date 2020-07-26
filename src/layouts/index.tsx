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
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: "center",
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          background: "#5B616F",
          padding: `10px`,
          color: "white",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} koyo-miyamura
      </footer>
    </>
  )
}

export default Layout
