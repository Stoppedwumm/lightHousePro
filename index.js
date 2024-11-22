const e = require("express");
const { neon } = require('@neondatabase/serverless');
const app = e();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

async function getPgVersion() {
    const result = await sql(`SELECT version()`);
    return result[0]
}
app.get("/", async (req, res) => {
    res.send(process.env)
    getPgVersion();
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app