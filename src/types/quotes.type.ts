import { Document, Types } from "mongoose"

export interface IQuote extends Document {
  quoteTitle: string
  imageUrl?: string // to be decided
  caption?: string
  quoteContent: string
  hashtags?: string[]
  author: string
  textColor: string
  bgColor: string
  reposts?: Types.ObjectId[]
  textXCoordinate: number
  textYCoordinate: number
  createdAt: Date
  lastActive: Date
  createdBy: Types.ObjectId
}
