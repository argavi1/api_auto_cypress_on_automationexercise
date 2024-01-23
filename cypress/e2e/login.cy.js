import { VALID_LOGIN } from '../data/login.data';
import { INVALID_LOGIN } from '../data/login.data';
import { LOGIN } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Login feature', () => {
    it('should successfully log in with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: BASE_URL.baseUrl + LOGIN.login,
        form: true,
        body: {
          email: VALID_LOGIN.email,
          password: VALID_LOGIN.password 
        },
      }).then((response) => {

      // Parse HTML response
      cy.wrap(response.body).then((body) => {
      // Assuming the response is in JSON format within the HTML
      const jsonResponse = JSON.parse(body);

      // Assert on specific values
      expect(jsonResponse.responseCode).to.equal(200);
      expect(jsonResponse.message).to.equal('User exists!');
      })
    })
  })

  it('should fail log in with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: BASE_URL.baseUrl + LOGIN.login,
      form: true,
      body: {
        email: INVALID_LOGIN.email,
        password: INVALID_LOGIN.password 
      },
    }).then((response) => {

    // Parse HTML response
    cy.wrap(response.body).then((body) => {
    // Assuming the response is in JSON format within the HTML
    const jsonResponse = JSON.parse(body);

    // Assert on specific values
    expect(jsonResponse.responseCode).to.equal(404);
    expect(jsonResponse.message).to.equal('User not found!');
    })
  })
})
})