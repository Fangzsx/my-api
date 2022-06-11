const fields = require('../schema/default/fields')
const permissions = require('../schema/default/permissions')

const schema = {
    fields,
    permissions
};

function injectDefaultSchema({name, fields, permissions}){
    return {
        name,
        fields : {
            ...schema.fields,
            ...fields
        },
        permissions : permissions ? permissions : schema.permissions
    };
}
module.exports = injectDefaultSchema;