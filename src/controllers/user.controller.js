import {createUser, getUsers} from "../services/user.service.js";
import {successResponse} from "../utils/apiResponse.js";

export const create = async (req,res)=>{
    const user = await createUser(req.body);
    successResponse(res, "User created", user, 201);
};

export const list = async (req,res)=>{
    const result = await getUsers(req.query);
    successResponse(res, "User fetched", result);
}