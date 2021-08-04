
import { Service } from "typedi";
import User from "../models/User";
import UserRepository from "../repositories/UserRepository";

@Service()
class GetUserService {
    constructor(private readonly userRepository: UserRepository) { }
    async getAllUsers(): Promise<User[]> {
        const result = await this.userRepository.getAllUsers();
        console.log(result)
        return result;
    }
}

export default GetUserService;