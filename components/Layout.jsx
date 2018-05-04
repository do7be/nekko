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
      <link rel="apple-touch-icon" href="/static/192x192.png" sizes="192x192"/>
      <link rel="manifest" href="/manifest.json"/>
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
      <script dangerouslySetInnerHTML={{__html: `
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
          OneSignal.init({
            appId: "f64b1892-dc6f-4b3e-8fb2-6268db7128f0",
            autoRegister: false,
            notifyButton: {
              enable: true
            }
          })
        });
      `}}/>
    </Head>
    <Header/>
    {props.children}
  </div>
)

export default Layout
