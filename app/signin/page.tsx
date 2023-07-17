import React from 'react'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import Login from '@/components/Login';

const Signin = async () => {

    const supabase = createServerComponentClient<Database>({cookies})

    const {
        data:{session}
    } = await supabase.auth.getSession();

    if(session){
        redirect("/")
    }


    return (
        <Login/>
    )
}

export default Signin;