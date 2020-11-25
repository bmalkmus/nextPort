const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
  /* config options here */
})

// module.exports = {
//   trailingSlash: true,
//   exportPathMap: function() {
//     return {
//       '/': { page: '/' }
//     };
//   }
// };