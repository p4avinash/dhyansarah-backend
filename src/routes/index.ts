import express from "express"
import user from "./user"
import quote from "./quote"

const router = express.Router()

router.use("/user", user)
router.use("/quote", quote)

export default router
