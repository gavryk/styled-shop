import '../styles/globals.scss';
import { Provider, createClient } from 'urql';
import { Header } from '../components';
import { StateContext } from '../lib/context';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <StateContext>
        <Provider value={client}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </div>
  );
}

export default MyApp
