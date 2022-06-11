const injectDefaultSchema = require('./')
class CreateSchema{
    constructor(repository) {
        this.repository = repository
        this.response = {};
    }
    addSchema(schema){
        schema = injectDefaultSchema(schema);
        return this.repository.addSchema(schema)
            .then(() => {
                this.schema = schema;
            })
    }
    writeResponse(){
        this.response = this.schema;
        return this.response;
    }
    execute(auth, schema){
        return Promise.resolve()
            .then(() => this.addSchema(schema))
            .then(() => this.writeResponse())
    }
}
module.exports = CreateSchema;