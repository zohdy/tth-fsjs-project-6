const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);

// Error Handling w. middleware
app.use((req, res, next) => {
    const err = new Error('Sorry. Bad Request');
    err.status = 400;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});