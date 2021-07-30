import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
//server -> routes -> Controller -> Service
class CreateUserService {
  async excute({name, email, admin, password} : IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);
    if(!email){
      //throw new  - lançando uma excessão 
      throw new Error("Email incorreto");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists){
      throw new Error("Usuário já existe");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
      password
    });

    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService }