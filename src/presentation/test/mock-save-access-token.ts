import { SaveAccessToken } from '@/domain/usecases'

export class SaveAcessTokenMock implements SaveAccessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
