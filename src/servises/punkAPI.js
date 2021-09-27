import apiUrl from "../constants/apiUrl.constants";

class ProductsAPI {
    constructor() {
      this.API_SERVER = apiUrl.punkAPIurl;
  
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