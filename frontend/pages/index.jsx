import Head from 'next/head';
import { useQuery } from 'urql';
import { Cards } from '../components';
import { PRODUCT_QUERY } from '../lib/query';
import styles from '../styles/Home.module.scss';

export default function Home() {
  //FETCH PRODUCTS
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p>Oops, something wrong...</p></div>;
  const products = data.products.data;

  return (
    <div className="container">
      <Head>
        <title>Styled Shop | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products && <Cards items={products} />}
    </div>
  );
}


