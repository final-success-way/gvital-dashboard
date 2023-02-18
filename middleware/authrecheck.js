
export default function ({$auth,redirect}){
   if ($auth && $auth.user) {
     return redirect('/dashboard')
   }
}
