import React from "react"
require("../styles/styles.scss")

const NavBar = () => {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
      <div className="columns is-mobile is-variable is-1 is-narrow">
        <div className="column is-narrow">
          <a href="/">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Home
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/about">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              About
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/gerrymandering">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Gerrymandering
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/blog">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Blog
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a href="/donate">
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Donate
            </span>
          </a>
        </div>

        <div className="column is-narrow">
          <a
            href="https://register.rockthevote.com/registrants/new?partner=36857"
            target="_blank"
            rel="noreferrer"
          >
            <span className="tag has-background-grey-dark has-text-white has-text-weight-bold">
              Register To Vote
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
