const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');

const accessToken = process.env.ACCESS_TOKEN;
const auth0Domain = process.env.AUTH0_DOMAIN;

console.log(`accessToken: ${accessToken}`);
console.log(`auth0Domain: ${auth0Domain}`);

if (!accessToken || !auth0Domain) {
  console.error('Access token or Auth0 domain not provided.');
} else {
  verifyToken(accessToken, auth0Domain);
}

function verifyToken(accessToken, auth0Domain) {
  const client = jwksClient({
    jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
  });

  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  };

  jwt.verify(accessToken, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      console.error('Error verifying token:', err.message);
    } else {
      console.log('Decoded Token:', decoded);
    }
  });
}

// Install node packages: npm install
// Export env vars and start script: npm start