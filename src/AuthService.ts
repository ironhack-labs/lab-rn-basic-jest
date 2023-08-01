export class AuthService {
  private registeredUsers = [
    { username: "carlos@test.com", password: "xdxdxdxd" },
    { username: "sergio@test.com", password: "xdxdxdxd" },
  ];

  constructor() {}

  public register(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let isValid = true;
      this.registeredUsers.forEach((element) => {
        if (element.username === username) isValid = false;
      });
      this.registeredUsers.push({ username, password });
      resolve(isValid);
    });
  }

  public login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let isValid = false;
      this.registeredUsers.forEach((element) => {
        if (element.username === username && element.password === password)
          isValid = true;
      });
      resolve(isValid);
    });
  }
}
