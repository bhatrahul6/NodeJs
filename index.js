const express = require('express'),
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/students', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/students', (req,res,next) => {
    res.end('Will send all the details to you!');
});

app.post('/students', (req, res, next) => {
 res.end('Will add the details: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/students', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /students');
});
 
app.delete('/students', (req, res, next) => {
    res.end('Deleting all students');
});

app.get('/students/:studentId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/students/:studentId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/students/:studentId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/students/:studentId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});


app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Here is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});