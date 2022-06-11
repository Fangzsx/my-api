const HttpServer = require('../http/HttpServer');
const Setup = require('../../domain/schema/Setup')

const express = require('express');
class App {
    constructor(options) {
        this.options = options;
        this.express = express();
        this.database = getDatabaseController();

    }
    startHttpServer(){
        this.httpServer = new HttpServer(this.options.port, this.express)
        return this.httpServer.start();
    }

    startDatabase(){
        const setup = new Setup(this.database);
        return setup.start()
            .catch((error) => { console.log(error)});
    }

    start(){
        return Promise.resolve()
            .then(() => this.startHttpServer())
    }
}
module.exports = App;