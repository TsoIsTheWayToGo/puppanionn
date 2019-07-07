const { environment } = require('@rails/webpacker')
const webpacker = require('webpacker')
environment.plugins.append('Provide',
  new.webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)
module.exports = environment
