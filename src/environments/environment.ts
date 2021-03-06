// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    runTimeConstants: '/assets/run-time-constants.json',
    banners: 'http://tiendapanda.com/banners/',
    singleBanner: 'http://tiendapanda.com/banners/',
    mlIds: 'https://cryptic-inlet-50631.herokuapp.com/ml-ids/',
    mlItems: 'https://api.mercadolibre.com/items'
  }
};
