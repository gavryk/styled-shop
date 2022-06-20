import '../styles/globals.scss';
import { Provider, createClient } from 'urql';

const client = createClient({ url: process.env.BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
