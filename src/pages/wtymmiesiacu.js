import React from "react"
import WTymMiesiacu from "../layouts/WTymMiesiacu"
import FirebaseProvider from '../utils/firebase'

const IndexPage = () => (
  <FirebaseProvider>
  <WTymMiesiacu />
  </FirebaseProvider>
)

export default IndexPage