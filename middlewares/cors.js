import cors from 'cors'

export const corsMiddlewares = (acceptedOrigins) => cors({
  origin: (origin, callback) => {

    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})