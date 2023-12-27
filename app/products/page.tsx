import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/database.types';
import ProductsDisplay from "@/app/products/_componetns/ProductsDisplay";

const Products = async() => {

    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession();

    console.log("login user", session?.user);

    return (
        <ProductsDisplay session={session}/>
    )
}

export default Products;