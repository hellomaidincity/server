const { port, env } = require('./configs/config');
const app = require('./app');

app.listen(port, () => console.info(`Server started on port ${port} (${env})`));

module.exports = app;
