import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const { query } = useRouter();
  //FETCH GRAPHQL DATA
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oops, something wrong...</p>;
  
  const {title, description, image} = data.products.data[0].attributes;

  return (
    <div className="page">
      <div className="container">
        <div className="productContent">
          <div className="thumbnail">
            <img src={image.data.attributes.formats.large.url} alt={title} />
          </div>
          <div className="info">
            <div className="title">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div>
              <span>Quantity</span>
              <button>Plus</button>
              <span>0</span>
              <button>Minus</button>
            </div>
          </div>
          <div className="addToCart">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
