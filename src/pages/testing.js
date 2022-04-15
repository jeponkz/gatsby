import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Testing = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main className='page'>
        <h1 className='test'>{data.site.info.author}</h1>
      </main>
    </Layout>
  )
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          name
          age
        }
        simpleData
        title
      }
    }
  }
`

export default Testing
