class AuthService {
    private registerdUsers: Map<string, string>;

    constructor() {
            this.registerdUsers = new Map<string, string>();
        }

    async register(username: string, password: string): Promise<boolean> {
        if (this.registerdUsers.has(username)) {
            return false; // Usuario tomado
        }

        this.registerdUsers.set(username, password);
        return true; // Registro correcto
    }

    async login (username: string, password: string): Promise<boolean> {
        const storedPassword = this.registerdUsers.get(username);
        if (storedPassword === password) {
            return true; // Login correcto
        }

        return false; // Login incorrecto
    }
}

export default AuthService;