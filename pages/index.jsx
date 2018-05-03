import Layout from '../components/Layout'
import { Link } from '../routes'

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <Link route='nekko' params={{ id: 1 }}>
      <a>Nekko 1</a>
    </Link>
  </Layout>
)

export default Index
