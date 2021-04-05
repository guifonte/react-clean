import { RequiredFieldValidation } from '@/validation/validators'
import { EmailValidation } from '../email/email-validation'
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
})
