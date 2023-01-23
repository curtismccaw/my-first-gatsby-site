import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm Curtis and I like to code. </p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Hi, i'm Curtis" />
    </>
)

export default AboutPage