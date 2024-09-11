import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { console } from "inspector";
import { redirect } from "next/navigation";
import { }

const Page = () => {
    const {getUser} = getKindeServerSession()
    const user = getUser()

    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')

    const dbUser = await db.user.findFirst({
        where: {
            id: user.id
        }
    })

    if(!dbUser) redirect('/auth-callback?origin=dashboard')

    return <Dashboard/>
}

export default Page