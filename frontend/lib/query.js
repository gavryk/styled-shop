export const PRODUCT_QUERY = `
query {
  products {
    data {
      attributes {
        title
        price
        description
        slug
        image {
					data {
            attributes {
              formats
            }
          }          
        }
      }
    }
  }
}`;