import { BRANDS_LIST } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Get all product list', () => {
    it('should successfully get all product list', () => {
      cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + BRANDS_LIST.brandsList,
      }).then((response) => {

      // Parse HTML response
      cy.wrap(response.body).then((body) => {
        
      // Assuming the response is in JSON format within the HTML
      const jsonResponse = JSON.parse(body);

      // Assert on specific values
      const brandsArray = jsonResponse.brands;
      expect(brandsArray).to.be.an('array');
      const brandWithId1 = brandsArray.find((brand) => brand.id === 1);

      expect(jsonResponse.responseCode).to.equal(200);
      expect(brandWithId1).to.exist;

      })
    })
  })
})