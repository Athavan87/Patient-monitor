// Dependencies
const http = require('http');
const app = require('./backend/app');
// Listening port
const port = process.env.port || 3333;
app.set('port', port);
// Creating server
const server = http.createServer(app);

// Listening the Server
server.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
});
