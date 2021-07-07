const http = require('http');

const users = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Artem'}
]

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
    
    if (cors(req, res)) return;
    
    console.log('some request');
    
    switch (req.url) {
        case '/users': {
            if (req.method === 'POST') {
                users.push({name: 'Alexey'})
                res.write(JSON.stringify({success: true}));
            }
            res.write(JSON.stringify(users));
            break;
        }
        case '/lessons': {
            res.write('TASKS');
            break;
        }
        default: {
            res.write('PAGE NOT FOUND')
            }
    }
    res.end();
} );

server.listen(7542);