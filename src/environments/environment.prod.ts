export const environment = {
  production: true,
  apiServerUrl: process.env['API_SERVER_URL'], // the running FLASK api server url
  auth0: {
    url: process.env['AUTH_URL'], // the auth0 domain prefix
    audience: process.env['AUDIENCE'], // the audience set for the auth0 app
    clientId: process.env['CLIENT_ID'], // the client id generated for the auth0 app
    callbackURL: process.env['CALLBACK_URL'], // the base url of the running ionic application.
  },
};
