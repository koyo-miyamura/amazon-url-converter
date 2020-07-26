import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SiteQuery } from "../../types/graphql-types"

type Meta = {
  name?: string
  property?: string
  content: string
}

type SEOProps = {
  description?: string
  lang?: string
  metaProps?: Meta[]
}

const SEO: FC<SEOProps> = ({ description, lang = "jp", metaProps = [] }) => {
  const data: SiteQuery = useStaticQuery(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const title = data.site?.siteMetadata?.title || ""

  const metaDescription = description || data.site?.siteMetadata?.description
  const defaultMetas: Meta[] = [
    {
      name: `description`,
      content: metaDescription || "",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription || "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: data.site?.siteMetadata?.author || "",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription || "",
    },
  ]

  const meta = defaultMetas.concat(metaProps)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={meta}
    />
  )
}

export default SEO
