const App = require('./App')
const options = {
    port : 80
}

new App(options)
    .start().then(() => { console.log('Server started. Running on port ' + options.port)})
