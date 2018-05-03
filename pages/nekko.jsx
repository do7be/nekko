import React from 'react'
import Layout from '../components/Layout'

import { getConfig } from '../database'

export default class Nekko extends React.Component {
  render () {
    const { id } = this.props.url.query
    const nekko = getConfig(id)
    return (
      <Layout>
        <p>{nekko.description}</p>
        <img src={nekko.img}/>
      </Layout>
    )
  }
}
