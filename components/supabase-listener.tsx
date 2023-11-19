'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/lib/database.types"
import Header from "./Layout/Header"

const SupabaseListener = async () => {
    const supabase = createServerComponentClient<Database>({cookies})

    const {
        data:{session}
    } = await supabase.auth.getSession()

    return (
        <Header session={session}/>
    )
}

export default SupabaseListener