import { AuthService } from '../src/AuthService'

const authService = new AuthService()

describe('Auth service', () => {

  test('Should registry new user succefully', async () => {
    expect(await authService.register('Jhon Doe', '1234')).toBe(true)
  })

  test('Should login succefully', async () => {
    expect(await authService.login('Jhon Doe', '1234')).toBe(true)
  })

  test('Should fail registering a taken username', async () => {
    expect(await authService.register('Jhon Doe', '0987')).toBe(false)
  })

  test('Should fail login with an incorrect username', async () => {
    expect(await authService.login('Jose Pepe', '1234')).toBe(false)
  })

  test('Should fail login with an incorrect password', async () => {
    expect(await authService.login('Jhon Doe', '1098')).toBe(false)
  })

  test('Should fail login with an incorrect password and username', async () => {
    expect(await authService.login('Jose Pepe', '1098')).toBe(false)
  })
})