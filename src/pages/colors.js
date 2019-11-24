import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const colorCircleStyles = {
  width: '24px',
  height: '24px',
  borderRadius: '50px',
  marginRight: '1rem',
  display: 'inline-block',
}

const colorWrapper = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
}

const Colors = () => (
  <Layout>
    <SEO title="Colors" />
    <h1>These are colors</h1>
    {[
      { label: "--prpl-100", color: "#d7c7ff" },
      { label: "--prpl-200", color: "#b994ff" },
      { label: "--prpl-400", color: "#6805f2" },
      { label: "--prpl-700", color: "#4108af" },
      { label: "--prpl-800", color: "#120572" },
      { label: "--green-100", color: "#f5ffd4" },
      { label: "--green-200", color: "#daf995" },
      { label: "--green-400", color: "#8ec622" },
      { label: "--green-700", color: "#729b19" },
      { label: "--green-800", color: "#326609" },
      { label: "--beige", color: "#e0d6ce" },
    ].map(({ label, color }, index) => (
      <div style={{...colorWrapper}} key={index}>
        <span style={{ ...colorCircleStyles, backgroundColor: color }} />
        <code>{label}</code>
      </div>
    ))}
    <Link to="/">Go home</Link>
  </Layout>
)

export default Colors
