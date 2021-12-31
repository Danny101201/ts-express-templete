import { RequestHandler } from "express"
import Example from '../modal/Example'
import createHttpError from "http-errors";
export const getExample: RequestHandler = (req, res) => {
  res.json({
    test: 'hellow World'
  })
}
export const getExampleData: RequestHandler = async (req, res, next) => {
  const { id, name }: ItemData = req.body
  const example = await Example.findOne({ name: name })
  try {

    if (example) {
      return next(createHttpError(406, "example have already exist"))
    }
    const newExample = new Example({ id, name })
    await newExample.save()
    res.json({
      id,
      name
    })
  }catch(err){
    return next(createHttpError.InternalServerError)
  }
}