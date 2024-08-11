import "dotenv/config"
import express from "express"
import routes from "./routes/index"
import connectDB from "./db/connect"
import { configVariables } from "./config"

const port = configVariables?.PORT_NO
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello, from backend")
})

app.use("/", routes)

const start = async () => {
  try {
    await connectDB(configVariables?.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
