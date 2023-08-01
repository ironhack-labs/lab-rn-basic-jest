export interface Users {
  id: number;
  username: string;
  password: string;
}

export class AuthService {

  private readonly registeredUsers: Users[] = [
    {
      id: new Date().getTime() * Math.trunc(Math.random() * 3),
      username: 'johnwick',
      password: '123456'
    },
    {
      id: new Date().getTime() * Math.trunc(Math.random() * 3),
      username: 'brucewayne',
      password: 'gothamcity'
    },
    {
      id: new Date().getTime() * Math.trunc(Math.random() * 3),
      username: 'wadewinston',
      password: 'sh00t&run'
    },
    {
      id: new Date().getTime() * Math.trunc(Math.random() * 3),
      username: 'mrrobot',
      password: '3ll10t'
    },
  ]

  register(username: string, password:string):Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.registeredUsers.find(user => {
          if(user.username === username || user.password === password) {
            reject(false)
          } else {
            resolve(true)
          }
        })
      }, 2000)
    })
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        this.registeredUsers.find(user => {
          if(user.username === username && user.password === password) {
            resolve(true)
          } else {
            reject(false)
          }
        })
      }, 2000);
    })
  }
}