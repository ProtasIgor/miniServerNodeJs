const http = require('http');
const EventEmitter = require('events');


class Application {

    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._cteateServer();
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    handler(req, res);
                })
            })
        })
    }

    listen(PORT, callback) {
        this.server.listen(PORT, callback);
    }

    _cteateServer() {
        return http.createServer((req, res) => {

            const emitted = this.emitter.emit(
                this._getRouteMask(req.url, req.method), req, res);

            if (!emitted) {
                res.end()
            }

        })
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }

}

module.exports = Application;