
import {Service} from "typedi";
import IUser from "../models/User";

@Service()
class UserRepository {
    private readonly users: IUser[] = [
        { name: 'Hector', address: "diginteligencia #222", age: 10},
        { name: 'Gerardo', address: "htech #2000", age: 1},
        { name: 'Tinajero', address: "lagersoft #123", age: 10 },
    ];

    async getAllUsers(): Promise<IUser[]> {
        return this.users;
    }
    async insertUser(user: IUser): Promise<IUser[]> {
        this.users.push(user)
        return await this.getAllUsers();
    }
}

export default UserRepository;