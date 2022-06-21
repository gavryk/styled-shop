import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import style from '../../styles/ProductDetail.module.scss';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const ProductDetails = () => {
  const { query } = useRouter();
  //FETCH GRAPHQL DATA
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  //Check for the data coming in
  if (fetching) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p>Oops, something wrong...</p></div>;
  
  const {title, description, image} = data.products.data[0].attributes;

  return (
    <div className="page">
      <div className="container">
        <div className={style.productContent}>
          <div className={style.thumbnail}>
            <img src={image.data.attributes.formats.large.url} alt={title} />
          </div>
          <div className={style.info}>
            <div className="title">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className={style.quantity}>
              <span>Quantity</span>
              <button><AiFillMinusCircle /></button>
              <span>0</span>
              <button><AiFillPlusCircle/></button>
            </div>
            <div className={style.addToCart}>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
