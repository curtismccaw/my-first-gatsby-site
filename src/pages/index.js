//Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

//Step 3: Export your component
export default IndexPage