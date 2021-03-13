/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// const config = await Metro.loadConfig();

// await Metro.runBuild(config, {
//   entry: 'index.js',
//   out: 'bundle.js',
// });
const Metro = require('metro');


module.exports = {
  /* general options */
  // resolver: {
  //   resolveRequest: () =>  {
  //     usewatchman : true
  //   }
    /* resolver options */
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  // },
  // serializer: {
    /* serializer options */
  // },
  // server: {
    /* server options */
  }
};
