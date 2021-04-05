import { RequiredFieldValidation } from '@/validation/validators'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return a RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return a EmailValidation', () => {
    const field = faker.database.column()
    const validators = sut.field(field).email().build()
    expect(validators).toEqual([new EmailValidation(field)])
  })

  test('Should return a MinLengthValidation', () => {
    const field = faker.database.column()
    const minLength = faker.datatype.number()
    const validators = sut.field(field).min(minLength).build()
    expect(validators).toEqual([new MinLengthValidation(field, minLength)])
  })

  test('Should return an array of FieldValidation', () => {
    const field = faker.database.column()
    const minLength = faker.datatype.number()
    const validators = sut.field(field).min(minLength).required().email().build()
    expect(validators).toEqual([
      new MinLengthValidation(field, minLength),
      new RequiredFieldValidation(field),
      new EmailValidation(field)
    ])
  })
})
