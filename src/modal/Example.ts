import { Schema, Document, model } from 'mongoose'

export interface IExamples extends Document {
  name: string,
  id: string,
}
const ExampleSchema: Schema = new Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
  }
})
export default model<IExamples>("Emample", ExampleSchema)