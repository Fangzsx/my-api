module.exports = Object.freeze({
    name: 'users',
    fields: {
        username: {
            type: 'String',
            unique: true,
            required: true,
            lowercase: true,
            minlength: 2,
            index: true
        },
        password: {
            type: 'String',
            required: true,
            transform: 'md5',
            minlength: 8,
            read: false,
            hidden: true,
        },
        email: {
            type: 'String',
            unique: true,
            pattern: '^.+@.+\\..+$'
        },
        acl: {
            type: 'ACL',
            write: false,
            read: false,
            default: {
                read: ['this.id', '*'],
                write: ['this.id'],
                __event: 'onSave'
            }
        }
    },
    permissions: {
        get: ['*'],
        create: ['*'],
        update: ['*'],
    }
});
