const PORT = process.env.PORT || 5000;
const userRouter = require('./framework/user-router');
const Application = require('./framework/Application');

const application = new Application();

application.use(parseJson);

application.addRouter(userRouter);

application.listen(PORT, () => { console.log(`Сервер успешно запущен на порту ${PORT}!`) });