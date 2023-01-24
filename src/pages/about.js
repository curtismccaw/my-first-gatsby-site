import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

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
        <Seo title="About"/>
        <meta name="description" content="Hi, i'm Curtis" />
    </>
)

export default AboutPage