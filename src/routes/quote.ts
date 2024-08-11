import express from "express"
import { createQuote, getAllQuotes } from "../controllers/quotes"

const router = express.Router()

router.post("/create", createQuote)
router.get("/getAllQuotes", getAllQuotes)

export default router
