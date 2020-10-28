const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const server = express();

const tipsRouter = require('../routers/tipsRouter.js');
const guidesRouter = require('../routers/guidesRouter.js');

// const server = express();

const sessionConfig = {
    name: 'auth',
    secret: 'authenticateUser',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new knexSessionStore(
        {
            knex: require('../database/db-config.js'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 1000 * 60 * 60
        }
    )
};



server.use(helmet());
server.use(express.json());
server.use(cors());


server.use(session(sessionConfig));


server.use('/api/tips', tipsRouter);
server.use('/api/guides', guidesRouter);

server.use(express.static('public'));

server.get('/', (req, res) => {
    res.send(`
        <h2>Help Guide Database Api</h2>
        <p>Welcome to Lambda's Help Guide Api</p>
    `);
});



module.exports = server;
