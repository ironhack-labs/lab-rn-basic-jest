export class AuthService {
    users: {[userName: string]: string};

    constructor(){
        this.users = {};
    };

    register(userName: string, password: string){
        return new Promise((resolve) => {
            if(!this.users[userName]){
                this.users[userName] = password;
                resolve(true);
            }
            resolve(false);
        })
    };

    login(userName: string, password: string){
        return new Promise((resolve) => {
            if(this.users[userName] === password){
                resolve(true);
            }
            resolve(false);
        })
    };
}