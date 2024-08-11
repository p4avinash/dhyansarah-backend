declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      PORT_NO: string
      MONGO_URI: string
      SECRET_KEY: string
      // add more environment variables and their types here
    }
  }
}
