import React from "react"
import HomePage from "../layouts/HomePage"
import SEO from "../components/seo"
import FirebaseProvider from '../utils/firebase'

const IndexPage = () => (
  
    //<SEO title="Test"><HomePage/></SEO>
    <FirebaseProvider>

        <HomePage />
    </FirebaseProvider>
)

export default IndexPage
