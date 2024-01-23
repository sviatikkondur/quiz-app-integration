/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'styles')],
    prependData: `@import "prependStyles.scss";`
  },
};
