import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About"></SEO>

      <h1
        className="title is-1"
        style={{ marginTop: "1rem", color: "#79f9e3" }}
      >
        about us.
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
        gravida metus. Aliquam sed neque molestie, rhoncus est sodales, ultrices
        nibh. Curabitur fringilla, augue sed iaculis ullamcorper, mi nisi
        pharetra nisl, eget sollicitudin est neque at eros. Integer ullamcorper
        porttitor elit, in vulputate orci mollis sed. Pellentesque accumsan nunc
        purus, sit amet congue purus posuere in. Sed convallis ante vel turpis
        elementum vulputate.
      </p>

      <br />

      <h1
        className="title is-1"
        style={{ marginTop: "1rem", color: "#79f9e3" }}
      >
        about this.
      </h1>

      <p>
        In elementum nec nunc tincidunt pretium. Nullam sit amet commodo enim,
        ac mattis diam. Donec erat risus, efficitur eu dui sit amet, scelerisque
        molestie ex. Maecenas lobortis porttitor neque, eget consectetur odio.
        Aliquam placerat ornare nulla id placerat. Nullam tincidunt felis at
        vehicula tempus.
      </p>
    </Layout>
  )
}

export default About
