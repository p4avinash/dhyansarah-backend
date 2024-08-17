import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import Quote from "../models/quotes"

export const createQuote = async (req: Request, res: Response) => {
  const {
    quoteTitle,
    quoteContent,
    caption,
    textColor,
    bgColor,
    author,
    textXCoordinate,
    textYCoordinate,
    hashtags,
    createdBy,
  } = req.body

  try {
    const newQuote = {
      quoteTitle,
      quoteContent,
      caption,
      textColor,
      bgColor,
      author,
      textXCoordinate,
      textYCoordinate,
      hashtags,
      createdBy,
    }

    await Quote.create(newQuote)

    res
      .status(StatusCodes.CREATED)
      .json({ message: "Quote successfully created!" })
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes?.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" })
  }
}

export const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const userId = "66b8e228f954c8a9af489b14" // user data needs to be attached to quotes route
    const allQuotes = await Quote.find({ createdBy: userId }).sort("createdAt")
    res.status(StatusCodes.OK).json({ allQuotes, count: allQuotes?.length })
  } catch (error) {
    res
      .status(StatusCodes?.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" })
    console.log(error)
  }
}
