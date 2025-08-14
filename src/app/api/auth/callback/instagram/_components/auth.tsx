import { ConnectInstagram } from '@/lib/login-user'
import { redirect } from 'next/navigation';

const Authenticate = async({searchParams}:{searchParams:Promise<{code:string}>}) => {
    const {code} = await searchParams
   await ConnectInstagram(code);
  return redirect('/dashboard')
}

export default Authenticate