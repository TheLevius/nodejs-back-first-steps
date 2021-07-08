const http = require('http');
const { getUsers, addUser } = require('./repository');
const { usersController } = require('./usersController');

const cors = (req, res) => {
    // Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return true;
	}
    return false
}

const server = http.createServer( (req, res) => {
    //CORS
    if (cors(req, res)) return;
    
    console.log(`some request`);
    
    switch (req.url) {
        case '/': res.write(`<h1>Server is Ok, but you are in root</h1>`)
            res.end();
            break;
        case '/users': usersController(req, res)
            break;

        case '/lessons': {
            res.write('TASKS');
            break;
        }
        default: {
            res.write('PAGE NOT FOUND')
            }
    }
} );

server.listen(7542);