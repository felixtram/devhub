var express = require('express');
var path = require('path');

var app = express(); 

/* Add a route to the server:
app.get(<route string>, function(req, res) {
    res.sendFile(path.join(__dirname, <path to file>));
});

note that <path to file> should be relative to the src directory
*/
app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'appintegrate.html'))
})
// Declare a static folder so our html files can pull the resources they need
app.use('/', express.static(path.join(__dirname, '/')));

// Don't add anything else to app after this call, 
// error handling needs to go last
app.use(errorHandler);

app.listen(8000 , function () {
  console.log('Example app listening on port 8000!');
});

// ************************************ //
// Functions
// ************************************ //
function errorHandler(err, req, res, next) {
    if(err.code == 'EADDRINUSE') {
        console.error('Port already in use');
        process.exit(1);
    }
    
    throw err;
}
