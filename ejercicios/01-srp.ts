interface User {
  username: string;
  email: string;
}

//! */ ---------------------------Codigo Original

// class UserManager {
//   users: User[] = [];

//   register(username: string, email: string): string {
//     if (!email.includes("@")) {
//       throw new Error("El correo no es valido");
//     }

//     this.users.push({ username, email });
//     return this.sendWelcomeEmail(email);
//   }

//   private sendWelcomeEmail(email: string): string {
//     return `Email enviado a ${email}`;
//   }
// }


//! ---------------------- Resolucion del codigo

class UserValidator {
  isValid(email: string): boolean {
     return (!email.includes("@"))? false: true}
    };

class UserRepository {
  users : User[] = [];

  register(username: string, email: string): void {
     this.users.push({ username, email });
}};

class EmailService {

  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
};

class UserRegistrationService {
  constructor( 
    public userValidator: UserValidator = new UserValidator(), 
    public userRepository: UserRepository = new UserRepository(), 
    public emailService: EmailService = new EmailService()
  ){};

  newUser({username, email}: User){
    this.userValidator.isValid(email);
    this.userRepository.register(username, email);
    this.emailService.sendWelcomeEmail(email);
  }
};

const user1 = new UserRegistrationService()

user1.newUser({username:"Lucas", email: "lucas@gmail.com"});