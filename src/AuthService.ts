type User = {
  username: string
  password: string
}

class AuthService {
  registeredUsers: User[] = []

  register(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const isUsernameTaken = this.registeredUsers.some(
        (user) => user.username === username
      )

      if (!isUsernameTaken) {
        this.registeredUsers.push({ username, password })
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  login(username: String, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const user = this.registeredUsers.find(
        (user) => user.username === username && user.password === password
      )

      resolve(!!user)
    })
  }
}
