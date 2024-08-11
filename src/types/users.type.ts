import { Document, Types } from "mongoose"

export interface IUser extends Document {
  lastName: string
  firstName: string
  email: string
  password: string
  bio?: string
  dp?: string
  followers: Types.ObjectId[]
  following: Types.ObjectId[]
  createdAt: Date
  lastActive: Date
}
