"use server"
import connectDB from "../database/db";
import userModel from "../database/schemas/userSchema";

export const saveUser = async (formData) => {
    await connectDB();
    try {
        return await userModel.create(formData);
    } catch (error) {
        return error
    }
}