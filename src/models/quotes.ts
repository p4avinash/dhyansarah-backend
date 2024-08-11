import { model, Schema } from "mongoose"
import { IQuote } from "../types/quotes.type"

const quoteSchema = new Schema<IQuote>({
  quoteTitle: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true,
  },
  caption: {
    type: String,
    required: true,
  },
  quoteContent: {
    type: String,
    required: true,
    trim: true,
  },
  textColor: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  bgColor: {
    type: String,
    required: true,
    trim: true,
  },
  reposts: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  hashtags: [
    {
      type: String,
    },
  ],
  textXCoordinate: {
    type: Number,
    required: true,
  },
  textYCoordinate: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
})

const Quote = model<IQuote>("Quote", quoteSchema)

export default Quote
