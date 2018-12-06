const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});