import '../styles/globals.scss';
import { Provider, createClient } from 'urql';
import { Header } from '../components';
import { StateContext } from '../lib/context';
import { UserProvider } from '@auth0/nextjs-auth0';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <UserProvider>
        <StateContext>
          <Provider value={client}>
            <Header />
            <Component {...pageProps} />
          </Provider>
        </StateContext>
      </UserProvider>
    </div>
  );
}

export default MyApp
