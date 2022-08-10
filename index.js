const app = require('express')();

const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("hello world war 2");
});

app.listen(port, () => console.log(`Listen on port ${port}`));