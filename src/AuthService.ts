class AuthService {
    private registeredUsers: { [username: string]: string } = {};
  
    public async register(username: string, password: string): Promise<boolean> {

      if (this.registeredUsers[username]) {
        return false;
      }

      this.registeredUsers[username] = password;
      return true;
    }
  
    public async login(username: string, password: string): Promise<boolean> {

      const userPassword = this.registeredUsers[username];
      
      if (userPassword && userPassword === password) {
        return true;
      }
  
      return false;
    }
  }
  
  export default AuthService;
  