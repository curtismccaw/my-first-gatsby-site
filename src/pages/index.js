//Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      {/* <StaticImage alt="alt text" src="https://placedog.net/500"></StaticImage> */}
      <StaticImage src="../images/dog-with-stick.jpeg" alt="Dog with stick"></StaticImage>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

//Step 3: Export your component
export default IndexPage