import { Router } from 'express'
import { getExample, getExampleData } from '../controllers/exampleController'
import { getExampleDataValidation } from '../validation/exampleValidation/exampleValidation'
const router = Router()
router.get('/', getExample)
router.post('/', getExampleDataValidation, getExampleData)
export default router