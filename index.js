const e = require("express");
const app = e();
const {key} = require("./api.json")

const sql = require("./asyncSQL.js")

// Create User Table if it doesn't exist
sql(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    projects INT,
    scenes INT,
    customEffects INT,
    planId INT
)`);

app.post("/api/registerUserPurchase", async (req, res) => {
    if (req.query.key == key) {
        
    }
});
app.get("/api/getUsers", async (req, res) => {
    if (req.query.key == key) {
        res.json(await sql("SELECT * FROM users"));
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app