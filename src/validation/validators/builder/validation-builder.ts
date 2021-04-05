import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'

export class ValidationBuilder {
  private readonly validators: FieldValidation[] = []
  private constructor (private readonly fieldName: string) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validators.push(new EmailValidation(this.fieldName))
    return this
  }

  min (minLength: number): ValidationBuilder {
    this.validators.push(new MinLengthValidation(this.fieldName, minLength))
    return this
  }

  build (): FieldValidation[] {
    return this.validators
  }
}
