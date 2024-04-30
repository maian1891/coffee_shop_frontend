// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiServerUrl: process.env['API_SERVER_URL'], // the running FLASK api server url
  auth0: {
    url: process.env['AUTH_URL'], // the auth0 domain prefix
    audience: process.env['AUDIENCE'], // the audience set for the auth0 app
    clientId: process.env['CLIENT_ID'], // the client id generated for the auth0 app
    callbackURL: process.env['CALLBACK_URL'], // the base url of the running ionic application.
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
