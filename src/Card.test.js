

import { Provider } from 'react-redux';


import Card from "./components/Card";

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import configureMockStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

let state = {
  cardProduct: {
    productsInCard: [1]
  }
};

const store = mockStore(() => state);
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('src/components/Card', () => {
  describe('Card', () => {
    it("expected innerHTML in elements of DOM", () => {
      const mockingData = JSON.parse(`{"id":1,"name":"Buzz","tagline":"A Real Bitter Experience.","first_brewed":"09/2007","description":"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.","image_url":"https://images.punkapi.com/v2/keg.png","abv":4.5,"ibu":60,"target_fg":1010,"target_og":1044,"ebc":20,"srm":10,"ph":4.4,"attenuation_level":75,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":64,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Maris Otter Extra Pale","amount":{"value":3.3,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.2,"unit":"kilograms"}},{"name":"Munich","amount":{"value":0.4,"unit":"kilograms"}}],"hops":[{"name":"Fuggles","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"First Gold","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Fuggles","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"First Gold","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Cascade","amount":{"value":37.5,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"],"brewers_tips":"The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.","contributed_by":"Sam Mason <samjbmason>"}`)
      act(() => {
        render(
          <Provider store={store}>
            
        <Card 
          id={mockingData.id}
          name={mockingData.name}
          tagline={mockingData.tagline}
          description={mockingData.description}
          image_url={mockingData.image_url}
          first_brewed = {mockingData.first_brewed} 
          volume={mockingData.volume}
          abv={mockingData.abv}
          />
          </Provider>, container
    );
      });
      expect(container.querySelector("h4").textContent).toBe("Buzz");
      expect(container.querySelector("li:first-child").textContent).toBe("Tagline: A Real Bitter Experience.");
      expect(container.querySelector("li:nth-child(2)").textContent).toBe("First brewed: 09/2007");
      expect(container.querySelector("li:nth-child(3)").textContent).toBe("Volume: 20 litres");
      expect(container.querySelector("li:nth-child(4)").textContent).toBe("abv: 4.5%");
      expect(container.querySelector("p").textContent).toBe("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");
    })
    it("change store on click", () => {

      act(() => {
        const mockingData = JSON.parse(`{"id":1,"name":"Buzz","tagline":"A Real Bitter Experience.","first_brewed":"09/2007","description":"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.","image_url":"https://images.punkapi.com/v2/keg.png","abv":4.5,"ibu":60,"target_fg":1010,"target_og":1044,"ebc":20,"srm":10,"ph":4.4,"attenuation_level":75,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":64,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Maris Otter Extra Pale","amount":{"value":3.3,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.2,"unit":"kilograms"}},{"name":"Munich","amount":{"value":0.4,"unit":"kilograms"}}],"hops":[{"name":"Fuggles","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"First Gold","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Fuggles","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"First Gold","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Cascade","amount":{"value":37.5,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"],"brewers_tips":"The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.","contributed_by":"Sam Mason <samjbmason>"}`)

        render(
          <Provider store={store}>
            
        <Card 
          id={mockingData.id}
          name={mockingData.name}
          tagline={mockingData.tagline}
          description={mockingData.description}
          image_url={mockingData.image_url}
          first_brewed = {mockingData.first_brewed} 
          volume={mockingData.volume}
          abv={mockingData.abv}
          />
          </Provider>, container
    );
        container.querySelector("input").dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
     expect(store.getState().cardProduct.productsInCard[0]).toBe(1);
    });
  })
})






