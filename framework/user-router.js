const Router = require('./Router');

const userRouter = new Router();

const users = [{
    id: 1,
    'name': 'Name',
}];

userRouter.get('/q', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users))
})
userRouter.get('/h', (req, res) => {
    res.send(users)
})

module.exports = userRouter;