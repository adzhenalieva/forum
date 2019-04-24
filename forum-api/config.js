const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    dbURL: 'mongodb://localhost/forum',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true
    }
};

