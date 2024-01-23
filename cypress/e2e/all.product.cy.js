import { PRODUCTS_LIST } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Get all product list', () => {
    it('should successfully get all product list', () => {
      cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + PRODUCTS_LIST.productList,
      }).then((response) => {

      // Parse HTML response
      cy.wrap(response.body).then((body) => {
        
      // Assuming the response is in JSON format within the HTML
      const jsonResponse = JSON.parse(body);

      // Assert on specific values
      const productsArray = jsonResponse.products;
      expect(productsArray).to.be.an('array');
      const productWithId1 = productsArray.find((product) => product.id === 1);

      expect(jsonResponse.responseCode).to.equal(200);
      expect(productWithId1).to.exist;

      })
    })
  })
})