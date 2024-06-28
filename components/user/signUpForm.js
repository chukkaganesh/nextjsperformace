"use client"
import { userFormActions } from '@/serverActions/userFormActions';
import React from 'react';
import { useFormState } from "react-dom";

const SignUpForm = () => {

    const [userData, userFormData] = useFormState(userFormActions, {});

    console.log("userData", userData);

    return (
        <>
            <form action={userFormData}>
                <input placeholder='name' name="userName" className='border-[1px]' />
                <input placeholder='email' name="email" className='border-[1px]' />
                <input placeholder='password' name="password" className='border-[1px]' />
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm