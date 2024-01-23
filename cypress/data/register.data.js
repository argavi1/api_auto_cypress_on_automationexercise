let randomString = Math.random().toString(36).substring(7);

export const VALID_REGISTER = {
    name: randomString,
    email: randomString + `@gmail.com`,
    password: '12345',
    firstName: randomString,
    lastName: randomString,
    address1: 'Jalan Sudirman IV',
    country: 'Indonesia',
    zipCode: '13120',
    state: 'Jakarta',
    city: 'DKI Jakarta',
    mobile_number: '089887652'

}