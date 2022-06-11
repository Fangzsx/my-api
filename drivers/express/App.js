const HttpServer = require('../http/HttpServer');
const express = require('express');
class App {
    constructor(options) {
        this.options = options;
        this.express = express();

    }
    startHttpServer(){
        this.httpServer = new HttpServer(this.options.port, this.express())
        return this.httpServer.start();
    }

    start(){
        return Promise.resolve()
            .then(() => this.startHttpServer())
    }
}