import User from "../models/user.model.js"

export const createUser = (data) => User.create(data);

export const getUsers = async (query)=>{
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments();

    return {
        data: users,
        meta:{
            total,
            page,
            limit
        }
    };
};