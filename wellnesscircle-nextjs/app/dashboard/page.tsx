
import Dashboard from '@/app/components/Dashboaard'
import { db } from '@/db'
//import { getUserSubscriptionPlan } from '@/lib/stripe'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

interface User {
    id?: string;
    email?: string;
}

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser() as User;

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

  return <Dashboard  />
}

export default Page