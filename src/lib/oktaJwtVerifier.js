const OktaJwtVerifier = require("@okta/jwt-verifier");

const OKTA_DOMAIN = process.env.OKTA_DOMAIN;
const AUTH_SERVER_ID = process.env.AUTH_SERVER_ID;

module.exports = {
  oktaJwtVerifier: new OktaJwtVerifier({
    issuer: `https://${OKTA_DOMAIN}/oauth2/${AUTH_SERVER_ID}`, // required
  }),
};
// export const oktaJwtVerifier = new OktaJwtVerifier({
//   issuer: `https://${OKTA_DOMAIN}/oauth2/${AUTH_SERVER_ID}`, // required
// });
