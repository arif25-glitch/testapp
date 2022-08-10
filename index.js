const app = require('express')();

const port = 80;

app.get('/', (req, res) => {
    res.end("Hello There");
});

app.listen(port, () => console.log(`Listen on port ${port}`));