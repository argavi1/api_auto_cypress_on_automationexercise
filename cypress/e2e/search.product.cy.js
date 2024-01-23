import { SEARCH_PRODUCT } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Post search product', () => {
    it('should successfully post search product', () => {
      cy.request({
        method: 'POST',
        url: BASE_URL.baseUrl + SEARCH_PRODUCT.searchProduct,
        form: true,
        body: {
          search_product: 'top'
        },
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