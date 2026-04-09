// import { cookies } from 'next/headers';
// import { forbidden, permanentRedirect, redirect } from 'next/navigation';


export default async function AdminDashboard() {
  // const roleCookie = await cookies();
  // const role = roleCookie.get('role')?.value;

  // if ('admin') {
  //   // forbidden();
  //   // redirect('/'); // 307
  //   permanentRedirect('/'); // 308
  // }

  return (
    <div className="flex items-center justify-center text-orange-500">AdminDashboard</div>
  )
}
