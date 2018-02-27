import * as restify from 'restify';
import * as corsMiddleware from 'restify-cors-middleware';

const PORT: number = 3050;

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
    const data = req.body && Object.keys(req.body).length ? req.body : req.query;
    res.json(data);
    next();
  });
});

server.listen(PORT, () => console.log(`mock-server running on port: ${PORT} :D`));
