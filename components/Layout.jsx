import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <link rel="manifest" href="/static/manifest.json"/>
    </Head>
    <Header/>
    {props.children}
  </div>
)

export default Layout
