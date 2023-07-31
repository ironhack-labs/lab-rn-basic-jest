interface User {
    username: string,
    password: string
}

export class AuthService {

    private registeredUsers: User[] = []

    public register(username: string, password: string): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.registeredUsers.some((obj) => obj.username == username)) return resolve(false)
            this.registeredUsers.push({ username, password })
            resolve(true)
        })
    }

    public login(username: string, password: string): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.registeredUsers.some((obj) => (obj.username == username && obj.password == password))) return resolve(true)
            resolve(false)
        })
    }
}