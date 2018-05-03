import React from 'react'
import Layout from '../components/Layout'

export default class Nekko extends React.Component {
  render () {
    return (
      <Layout>
        <p>This is Nekko Page {this.props.url.query.id}</p>
      </Layout>
    )
  }
}
