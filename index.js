const e = require("express");
const { neon } = require('@neondatabase/serverless');
const app = e();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

if (process.env.NODE_ENV !== "production") {
    const dotenv = require("dotenv")
    dotenv.config()
}
async function getPgVersion() {
    const result = await sql(`SELECT version()`);
    return result[0]
}
app.get("/", async (req, res) => {
    getPgVersion();
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app