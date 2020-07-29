import React, { FC, useState } from "react"
import { PageProps } from "gatsby"
import { toast } from "react-toastify"

import SEO from "../components/seo"

const IndexPage: FC<PageProps> = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const convertUrl = (urlText: string) => {
    if (urlText.startsWith("https://www.amazon.co.jp/gp/product")) {
      const re = /(https:\/\/www\.amazon\.co\.jp).*(\/gp\/product\/[0-9a-zA-Z]*).*/

      return urlText.replace(re, "$1$2")
    }
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

  const handleClickCopy = () => {
    const copyFrom = document.createElement("textarea")
    copyFrom.textContent = result

    const bodyElm = document.getElementsByTagName("body")[0]
    bodyElm.appendChild(copyFrom)

    copyFrom.select()
    if (document.execCommand("copy")) {
      toast.info("Copied!")
    }
    bodyElm.removeChild(copyFrom)
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
      {result && (
        <>
          <p>
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
          </p>

          <div
            className={result && "animate__animated animate__fadeIn"}
            style={{
              display: "inline-block",
              position: "relative",
              padding: "30px 10px 7px",
              margin: "2em 0",
              border: "solid 2px darkslategray",
            }}
          >
            <span
              style={{
                position: "absolute",
                display: "inline-block",
                top: "-2px",
                left: "-2px",
                padding: "0 9px",
                height: "25px",
                lineHeight: "25px",
                fontSize: "17px",
                background: "darkslategray",
                color: "#ffffff",
                fontWeight: "bold",
              }}
              onClick={handleClickCopy}
            >
              Copy
            </span>
            <p
              style={{
                margin: "0",
                padding: "0",
                color: "darkslategray",
                fontWeight: "bolder",
                overflowWrap: "break-word",
              }}
            >
              {result}
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default IndexPage
