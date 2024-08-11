import "dotenv/config"

export const configVariables = {
  MONGO_URI: process.env.MONGO_URI,
  PORT_NO: process.env.PORT_NO,
  SECRET_KEY: process.env.SECRET_KEY,
}
