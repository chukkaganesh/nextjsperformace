import React from 'react'
import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';
import SignUpForm from '@/components/user/signUpForm';
// import userModel from '@/lib/database/schemas/userSchema';

const Signup = async () => {
    const { user } = await validateRequest();
    console.log("user", user);
    if (user) {
        return redirect('/');
    }

    return <SignUpForm />
}

export default Signup;