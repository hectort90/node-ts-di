import { Request, Response } from "express";
import { Service } from "typedi";
import GetUserService from "../services/GetUserService";
import InsertUserService from "../services/InsertUserService";

@Service()
class UserController {
    constructor(
        private readonly getUserService: GetUserService,
        private readonly insertUserService: InsertUserService
    ) { }
    async getAllUsers(_req: Request, res: Response) {
        const result = await this.getUserService.getAllUsers();
        return res.json(result);
    }
    async insertUser(_req: Request, res: Response){
        const result = await this.insertUserService.insertUser();
        return res.json(result);
    }
}

export default UserController;