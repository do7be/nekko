import Layout from '../components/Layout'
import { Link } from '../routes'

const Index = () => (
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

export default Index
