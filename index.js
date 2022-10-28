const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) => {
    res.statusCode = 200; //success response code
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my portfoilio!\n');
});
server.listen(port,hostname,() => {
    console.log('Server be running successfully on local host')
});