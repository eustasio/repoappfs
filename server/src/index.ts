import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Coucou c'est Florian</h1>");
});

/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});