const CreateSchema = require('./CreateSchema');
const user = require('../schema/default/user');
const masterKey = 'true'

class Setup{
    constructor(database) {
        this.database = database;
        this.createUserUseCase = new CreateSchema(database.getSchemaRepository())
    }

    createUser(){
        return this.createUserUseCase.execute(masterKey, user)
    }

    start(){
        return Promise.resolve()
            .then(() => this.createUser())
    }
}
module.exports = Setup