const NodeGeocoder = require('node-geocoder')

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'XZcfkZMlI81vDL3P0RsPllif9UwcF2Zj',
  formatter: null,
}

const geocoder = NodeGeocoder(options)

module.exports = geocoder
