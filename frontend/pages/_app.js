import '../styles/globals.scss';
import { Provider, createClient } from 'urql';
import { Header } from '../components';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <Provider value={client}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp
