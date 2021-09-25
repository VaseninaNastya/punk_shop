class ProductsAPI {
    constructor() {
      this.API_SERVER = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
  
    }
    /*  Users   */
    async getData() {
      return fetch(this.API_SERVER  , {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .catch((error) => Error(error));
    }
  }
  export default ProductsAPI;