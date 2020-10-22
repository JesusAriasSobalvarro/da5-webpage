import React from "react"
import PlanTygodnia from "../layouts/PlanTygodnia"
import FirebaseProvider from '../utils/firebase'

const IndexPage = () => (
  <FirebaseProvider>
  <PlanTygodnia />
  </FirebaseProvider>
)

export default IndexPage