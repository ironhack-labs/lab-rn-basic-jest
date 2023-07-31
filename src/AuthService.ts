export type User = {
  username: string
  password: string
}

export class AuthService {
  private registeredUsers: User[] = []

  register (username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.registeredUsers.find(user => user.username === username)) {
        reject(false)
        return
      }

      this.registeredUsers.push({ username, password })
      resolve(true)
    })
  }

  login (username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const user = this.registeredUsers.find(
        user => user.username === username && user.password === password
      )

      if (!user) {
        reject(false)
        return
      }

      resolve(true)
    })
  }
}
