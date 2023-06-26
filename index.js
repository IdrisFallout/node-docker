const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({
        "responseType" : "success",
        "message" : "Hello World, I am running from a docker container"
    })
});

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))