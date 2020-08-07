import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/blogTag"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog"></SEO>

      <h1
        className="title is-1"
        style={{ marginTop: "1rem", color: "#79f9e3" }}
      >
        our writings.
      </h1>

      <p>We write about voting, and all things related.</p>

      <br />

      <p
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        <strong style={{ borderBottom: "2px solid red", color: "white" }}>
          all posts:
        </strong>
      </p>

      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <Link to={frontmatter.path}>
            <div
              className="box"
              key={frontmatter.path}
              style={{ color: "grey", marginBottom: "1rem" }}
            >
              <span style={{ fontSize: "0.75rem" }}>{frontmatter.date} </span>
              <br />
              <Link to={frontmatter.path}>
                <p style={{ color: "black" }}>{frontmatter.title}</p>
              </Link>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginBottom: "0.5rem",
                  marginTop: "0.1rem",
                  color: "black",
                }}
              >
                {frontmatter.excerpt}
              </p>
              {frontmatter.tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
          </Link>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query FilterForNonDesignPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { ne: "design" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            path
            date
            tags
          }
        }
      }
    }
  }
`

export default Blog
