import { RequiredFieldValidation } from '@/validation/validators'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return a RequiredFieldValidation', () => {
    const validators = sut.field('any_field').required().build()
    expect(validators).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return a EmailValidation', () => {
    const validators = sut.field('any_field').email().build()
    expect(validators).toEqual([new EmailValidation('any_field')])
  })

  test('Should return a MinLengthValidation', () => {
    const validators = sut.field('any_field').min(5).build()
    expect(validators).toEqual([new MinLengthValidation('any_field', 5)])
  })

  test('Should return an array of FieldValidation', () => {
    const validators = sut.field('any_field').min(5).required().email().build()
    expect(validators).toEqual([
      new MinLengthValidation('any_field', 5),
      new RequiredFieldValidation('any_field'),
      new EmailValidation('any_field')
    ])
  })
})
