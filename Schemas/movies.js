import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie tittle must be a string',
    required_error: 'Movie tittle is required'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantase', 'Horror', 'Thriller', 'Sci-Fi'])
  )
})

export function validateMovie(object) {
  return movieSchema.safeParse(object)
}

export function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input)
}
