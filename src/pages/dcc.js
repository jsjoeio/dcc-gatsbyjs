import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the Desert Code Camp page.</h1>
    <p>Welcome to DCC!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
