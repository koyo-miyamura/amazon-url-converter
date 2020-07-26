import React, { FC, useState } from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"

const IndexPage: FC<PageProps> = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const convertUrl = (urlText: string) => {
    const re = /(https:\/\/www\.amazon\.co\.jp).*(\/dp\/[0-9a-zA-Z]*).*/

    return urlText.replace(re, "$1$2")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        setResult(convertUrl(text))
        break
      default:
        break
    }
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <>
      <SEO />
      <div
        style={{
          maxWidth: "100%",
          height: "100px",

          margin: "0 auto 30px",
        }}
      >
        <input
          placeholder="Enter Your Amazon URL !!"
          type="text"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          style={{
            width: "500px",
            maxWidth: "100%",
            marginTop: "50px",
            padding: "15px",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: `border-box`,
          }}
        />
      </div>
      <p>
        {result && (
          <a
            href={result}
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              background: "darkslategray",
              color: "white",
              padding: "5px 10px",
              borderRadius: "20px",
              fontFamily: "Avenir,Arial",
            }}
          >
            Move to the link
          </a>
        )}
      </p>
      <p>{result}</p>
    </>
  )
}

export default IndexPage
