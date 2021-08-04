import {Inject, Service} from "typedi";
import User from "../models/User";
import axios from "axios";
import UserRepository from "../repositories/UserRepository";

@Service()
class InsertUserService {
    userRepository: UserRepository;
    constructor(@Inject() userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    async insertUser(): Promise<User[]> {
        let {data} = await axios.get("https://randomuser.me/api/");
        let user: User = {
            age: data.results[0].registered.age,
            address: data.results[0].location.street.name,
            name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
        };
        return await this.userRepository.insertUser(user);
    };
}
export default InsertUserService;