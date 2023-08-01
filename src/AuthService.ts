// AuthService.ts
class AuthService {
    private registeredUsers: { [username: string]: string };

    constructor() {
      this.registeredUsers = {};
    }

    async register(username: string, password: string): Promise<boolean> {
      if (this.registeredUsers[username]) {
        return false; // Username already taken
      }

      this.registeredUsers[username] = password;
      return true;
    }

    async login(username: string, password: string): Promise<boolean> {
      const storedPassword = this.registeredUsers[username];
      if (storedPassword === password) {
        return true; // Successful login
      }

      return false; // Invalid credentials
    }
  }

  export default AuthService;
