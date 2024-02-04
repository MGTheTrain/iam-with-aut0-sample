export const environment = {
  production: true,
  auth0: {
    // domain: process.env['AUTH0_DOMAIN'] || 'dev-d81cx3ar5jc0hn2z.us.auth0.com',
    // clientId: process.env['AUTH0_CLIENT_ID'] || 'N7nDGcMjEwUSSn1RZjhSTPk59zUfWThK',
    // audience: process.env['AUTH0_AUDIENCE'] || 'https://quickstart/api',
    domain: 'dev-d81cx3ar5jc0hn2z.us.auth0.com', // Auth0 **application** specific value
    clientId: 'N7nDGcMjEwUSSn1RZjhSTPk59zUfWThK', // Auth0 **application** specific value
    audience: 'https://quickstart/api', // Auth0 **API** specific value
  },
};
