const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer();

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}..`);
    });
}

startServer();