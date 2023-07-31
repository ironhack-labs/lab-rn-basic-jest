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
      } else {
        this.registeredUsers.push({ username, password })
        resolve(true)
      }
    })
  }

  login (username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const user = this.registeredUsers.find(
        user => user.username === username && user.password === password
      )

      if (user) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }
}
