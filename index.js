const app = require('express')();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on port ${port}`));

app.get("/", (req, res) => {
    res.send("hello this is from clone git");
});
