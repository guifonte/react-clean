import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'
import { InvalidFieldError } from '@/validation/errors'

const makeSut = (minLength: number): MinLengthValidation => {
  return new MinLengthValidation(faker.database.column(), minLength)
}

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const minLength = faker.datatype.number({ precision: 1, min: 1, max: 30 })
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength - 1))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const minLength = faker.datatype.number({ precision: 1, min: 1, max: 30 })
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength))
    expect(error).toBeFalsy()
  })
})
