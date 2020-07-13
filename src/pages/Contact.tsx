import React from "react"
import Layout from "../components/layout"
import Contact from "../components/pages/Contact/Contact"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
  </Layout>
)

export default ContactPage
