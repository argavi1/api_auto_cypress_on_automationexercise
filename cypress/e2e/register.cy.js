import { REGISTER } from '../const/routes';
import { LOGIN } from '../const/routes';
import { BASE_URL } from '../const/routes';
import { VALID_REGISTER } from '../data/register.data'

describe('Register feature', () => {
    it('should successfully register with random email', () => {
      cy.request({
        method: 'POST',
        url: BASE_URL.baseUrl + REGISTER.register,
        form: true,
        body: {
          name: VALID_REGISTER.name,
          email: VALID_REGISTER.email,
          password: VALID_REGISTER.password,
          firstname: VALID_REGISTER.firstName,
          lastname: VALID_REGISTER.lastName,
          address1: VALID_REGISTER.address1,
          country: VALID_REGISTER.country,
          zipcode: VALID_REGISTER.zipCode,
          state: VALID_REGISTER.state,
          city: VALID_REGISTER.city,
          mobile_number: VALID_REGISTER.mobile_number
        },
      }).then((response) => {
      
      // Parse HTML response
      cy.wrap(response.body).then((body) => {
      
      // Assuming the response is in JSON format within the HTML
      const jsonResponse = JSON.parse(body);

      // Assert on specific values
      expect(jsonResponse.responseCode).to.equal(201);
      expect(jsonResponse.message).to.equal('User created!');
      })
    })
  })
})