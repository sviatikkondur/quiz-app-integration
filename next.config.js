/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "prependStyles.scss";`
  },
}

module.exports = nextConfig;
