const {mongo} = require("mongoose");

class MongoStorageAdapter{
    constructor(mongodb, uri, options) {
        this.mongodb = mongodb;
        this.uri = uri;
        this.options = options;
        this.dbName = options.dbName;
        delete this.options.dbName;
    }
    connect(){
        if(this.connectionPromise){
            return this.connectionPromise;
        }

        this.connectionPromise = this.mongodb.MongoClient
            .connect(this.uri, this.options)
            .then((client) => {
                this.client = client;
                this.database = client.db(this.dbName);
            })
            .catch((error) => {
                delete this.connectionPromise;
                return Promise.reject(error);
            })
        return this.connectionPromise;
    }


}
module.exports = MongoStorageAdapter