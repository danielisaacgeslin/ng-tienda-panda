import * as restify from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';

const PORT: number = 3050;
const JSON_PARSE_RESPONSE_KEY: string = 'parseMePlease';

export const server = restify.createServer({ name: 'mock-server' });

const cors = corsMiddleware({ origins: ['*'], allowHeaders: ['*'], exposeHeaders: ['*'] });

server.pre(cors.preflight);
server.use(cors.actual);
server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.authorizationParser());
server.use(restify.plugins.fullResponse());

['get', 'post', 'put', 'del'].forEach(method => {
  server[method]('.*', (req: restify.Request, res: restify.Response, next: restify.Next) => {
    let data = req.body && Object.keys(req.body).length ? req.body : req.params;
    if (req.query && req.query[JSON_PARSE_RESPONSE_KEY]) data = JSON.parse(req.query[JSON_PARSE_RESPONSE_KEY]);
    console.log(`${method.toUpperCase()} : `, data);
    res.json(data);
    next();
  });
});

server.listen(PORT, () => console.log(`mock-server running on port: ${PORT} :D`));

server.on('close', () => console.log('bye bye'));
