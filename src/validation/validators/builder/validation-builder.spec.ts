import { RequiredFieldValidation } from '@/validation/validators'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return a RequiredFieldValidation', () => {
    const fields = sut.field('any_field').required().build()
    expect(fields).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return a EmailValidation', () => {
    const fields = sut.field('any_field').email().build()
    expect(fields).toEqual([new EmailValidation('any_field')])
  })

  test('Should return a MinLengthValidation', () => {
    const fields = sut.field('any_field').min(5).build()
    expect(fields).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
