

//Settings
var http = require('http');
var url = require('url');
var querystring = require('querystring');


//Body
var server = http.createServer( function(req, res){
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;    
    console.log(page);
    console.log(params);
    res.writeHead(200, { "Content-type":"text/plain" } );
    
    if( page == '/'){
        res.write('velcome papi');
    }
    else if ( page == '/sexe' ){
        res.write('Well Hello Papi');

        if('firstname' in params && 'lastname' in params){
            res.write('Papi, your name is' + params['firstname'] + ' ' + params['lastname']);
        }
        else{
            res.write('who the f are you?');
        }
    }
    else if ( page == '/test' ){
        res.write('Testing the test papi');
    }

    res.end('Beating Ferverntly');

});

server.listen(8080);