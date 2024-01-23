import { USER_DETAIL } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Get user details', () => {
    it('should successfully get user details', () => {
      cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + USER_DETAIL.userDetail,
        form: true,
        qs: {
            email: 'jagotester@gmail.com'
        }
      }).then((response) => {

      // Parse HTML response
      cy.wrap(response.body).then((body) => {
      // Assuming the response is in JSON format within the HTML
      const jsonResponse = JSON.parse(body);

      // Assert on specific values
      expect(jsonResponse.responseCode).to.equal(200);
      expect(jsonResponse.user.name).to.equal('jago tester');
      })
    })
  })
})