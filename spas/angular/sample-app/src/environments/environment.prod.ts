export const environment = {
  production: true,
  auth0: {
    domain: process.env['AUTH0_DOMAIN'] || 'dev-d81cx3ar5jc0hn2z.us.auth0.com',
    clientId: process.env['AUTH0_CLIENT_ID'] || 'N7nDGcMjEwUSSn1RZjhSTPk59zUfWThK',
    audience: process.env['AUTH0_AUDIENCE'] || 'https://quickstart/api',
  },
};
