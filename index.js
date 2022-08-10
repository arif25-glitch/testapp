const app = require('express')();

const port = 3000;

app.listen(port, () => console.log(`Listen on port ${port}`));

app.get("/", (req, res) => {
    res.send("hello world war 2");
});
