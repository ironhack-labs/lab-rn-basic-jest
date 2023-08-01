type User={
    username: string;
    password: string;
}

class AuthService {
    private users: User[] = [];

    async register(username: string, password: string): Promise<boolean>{
        const isUserNameTaken = this.users.some((user) => user.username === username);
        if(isUserNameTaken){
            return false;
        }
        this.users.push({username, password});
        return true;
    }

    async login(username: string, password: string): Promise<boolean> {
        const user = this.users.find((user) => user.username === username);
        if(!user){
            return false;
        }
        if(user.password === password){
            return true;
        }
        return false;
    }

}

export default AuthService;