import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Know That Jawn"></SEO>
    <h1
      className="title is-1"
      style={{ marginTop: "1rem", color: "#79f9e3", fontSize: "6rem" }}
    >
      know that jawn.
    </h1>

    <p>Got only 3 minutes? Watch this:</p>

    <Video
      videoSrcURL="https://www.youtube.com/embed/bGLRJ12uqmk"
      videoTitle="Washington Post Explanation on Gerrymandering"
    />
  </Layout>
)

export default IndexPage
