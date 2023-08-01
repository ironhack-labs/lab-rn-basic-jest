type User = {
    username: string,
    password: string,
};

export default class AuthService {

  private registeredUsers:User[] = [];

  public register (username: string, password: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        if (username.length && password.length) {
            const existUser = this.registeredUsers.filter(user => {
                return user.username === username
            });
            
            if (!existUser.length) {
                this.registeredUsers.push({
                    username,
                    password,
                });
                resolve(true);
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    });
  }

  public login (username: string, password: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        if (username.length && password.length) {
            const existUser = this.registeredUsers.filter(user => {
                return user.username === username &&
                       user.password === password
            });
            console.log('existUser --> ', existUser);
            
            if (existUser.length) {
                resolve(true);
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    });
  }
}