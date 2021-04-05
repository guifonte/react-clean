import { RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return a RequiredFieldValidation', () => {
    const fields = sut.field('any_field').required().build()
    expect(fields).toEqual([new RequiredFieldValidation('any_field')])
  })
})
