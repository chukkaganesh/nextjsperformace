"use server"

import { saveUser } from "@/lib/apis/users";
import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const userFormActions = async (prevState, formData) => {

    const userName = formData.get('userName');
    const email = formData.get('email');
    const password = formData.get('password');

    const error = {}

    if (!userName) {
        error.userName = 'userName is required.'
    }

    if (!email) {
        error.email = 'email is required'
    }

    if (!password) {
        error.password = 'password is required.'
    }

    if (Object.keys(error).length > 0) {
        return error;
    }

    const userDetails = { userName, email, password }

    const savedUserDetails = await saveUser(userDetails);

    if (savedUserDetails) {
        const cookie = await createSession(savedUserDetails);
        if (cookie) {
            redirect('/')
        }
    }

    return savedUserDetails;

}