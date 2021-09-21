/*const getPunkAPIRes = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers`);
    const body = await res.json();
    return body || [];
}
getPunkAPIRes().then(res => console.log(`####:reaaasdadss`, res))
export default getPunkAPIRes;*/


/*import axios from "axios";

export default axios.create({
  baseURL: "https://api.punkapi.com/v2",
  responseType: "json"
});*/

class ProductsAPI {
    constructor() {
      this.API_SERVER = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
  
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