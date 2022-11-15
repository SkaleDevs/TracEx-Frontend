const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/crypto',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
module.exports = {
  images: {
    domains: ['images.unsplash.com']
  }
}
