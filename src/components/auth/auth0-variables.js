export const config = {
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    // For production, redirect and logoutUrl should be on port 3005
    roleUrl: "https://crypto-info/role",
    callbackUrl: "http://localhost:3000/callback"
  };