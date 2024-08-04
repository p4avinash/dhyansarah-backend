import "dotenv/config"
import express from "express"

const app = express()

const connectDB = require("./db/connect")

const port = 5000

app.get("/", (req, res) => {
  res.send("Hello, from backend")
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
