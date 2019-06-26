// IMPORTS
const express = require('express');
const app = express();

app.set('view engine', 'html');
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.get('*', (req, res) => {
    res.redirect('/');
});





// Stops server starting during tests
if (require.main === module) {
    app.listen(process.env.PORT || 8080, () => {
        console.log(process.env.PORT ? `Online` : `Listening on port 8080`);
    });
}
