import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../routes'

class Index extends React.Component {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/static/serviceWorker.js')
      .then(function() {
        console.log('Service Worker Registered')
      })
      .catch(err => console.error("Service worker registration failed", err))
    }
  }

  render () {
    return (
      <Layout>
        <ul>
          <li>
            <Link route='nekko' params={{ id: 3 }}>
              <a>Nekko 3</a>
            </Link>
          </li>
          <li>
            <Link route='nekko' params={{ id: 2 }}>
              <a>Nekko 2</a>
            </Link>
          </li>
          <li>
            <Link route='nekko' params={{ id: 1 }}>
              <a>Nekko 1</a>
            </Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Index
