import AuthService from '../src/AuthService'

test('Hello world test', () => {
  expect('Hello world!').toBe('Hello world!')
})

describe('Auth Service', () => {
  const authService = new AuthService()

  describe('register function', () => {
    test('should register a new user', async () => {
      const result = await authService.register('katia', '12345')
      expect(result).toBe(true)
    })

    test('should register a new user', async () => {
      const result = await authService.register('mariana', 'password')
      expect(result).toBe(true)
    })

    test('should register a new user', async () => {
      const result = await authService.register('ilse', '123456')
      expect(result).toBe(true)
    })

    test('should register to be unsuccessful', async () => {
      const result = await authService.register('katia', 'password')
      expect(result).toBe(false)
    })

    test('should register to be unsuccessful', async () => {
      const result = await authService.register('mariana', '123456')
      expect(result).toBe(false)
    })

    test('should register to be unsuccessful', async () => {
      const result = await authService.register('ilse', 'something')
      expect(result).toBe(false)
    })
  })

  describe('login function', () => {
    test('should be an unsuccessfull login', async () => {
      const result = await authService.login('katia', 'password')
      expect(result).toBe(false)
    })

    test('should be an unsuccessfull login', async () => {
      const result = await authService.login('katiaa', '12345')
      expect(result).toBe(false)
    })
  })
})
