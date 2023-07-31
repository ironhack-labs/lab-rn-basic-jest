import { AuthService, User } from '../src/AuthService'

describe('AuthService', () => {
  const authService = new AuthService()

  test('successful registration', async () => {
    const credentials: User = {
      username: 'eduardo',
      password: '1234'
    }

    const result = await authService.register(
      credentials.username,
      credentials.password
    )

    expect(result).toBe(true)
  })

  test('successful login', async () => {
    const credentials: User = {
      username: 'eduardo',
      password: '1234'
    }

    const result = await authService.login(
      credentials.username,
      credentials.password
    )

    expect(result).toBe(true)
  })

  test('unsuccessful registration', async () => {
    const credentials: User = {
      username: 'eduardo',
      password: '1234'
    }

    expect(
      authService.register(credentials.username, credentials.password)
    ).rejects.toBe(false)
  })

  test('unsuccessful login', async () => {
    const credentials: User = {
      username: 'eduardo',
      password: '12345'
    }

    expect(
      authService.login(credentials.username, credentials.password)
    ).rejects.toBe(false)
  })
})
