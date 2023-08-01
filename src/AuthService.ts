interface User {
  username: string;
  password: string;
}

class AuthService {
  private registeredUsers: User[];

  constructor() {
    this.registeredUsers = [];
  }
  //Funcion para registrar a un usuario nuevo
  async register(username: string, password: string): Promise<boolean> {
    //Verificacion de si el nombre de usuario ya esta registrado
    const userExists = this.registeredUsers.some(
      (user) => user.username === username
    );
    //Si el nombre del usuario ya esta registrado no se puede volver a registrar
    if (userExists) {
      return false;
    }

    // EL registro del usuario fue exitoso
    this.registeredUsers.push({ username, password });
    return true;
  }
  // Funcion para iniciar sesion
  async login(username: string, password: string): Promise<boolean> {
    const user = this.registeredUsers.find(
      (user) => user.username === username
    );
    // Verificacion de si el usuario existe y la contraseña coincide
    if (!user || user.password !== password) {
      //Si las credenciales son erroneas no puede iniciar sesion
      return false;
    }

    // El usuario se registra exitosamente
    return true;
  }
}

export default AuthService;
