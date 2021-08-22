const express = require('express');
const bodyParser = require('body-parser');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the details to you!');
})
.post((req, res, next) => {
    res.end('Will add the details: ' + req.body.name + ' with more details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /students');
})
.delete((req, res, next) => {
    res.end('Deleting all details of students');
});

module.exports = dishRouter;