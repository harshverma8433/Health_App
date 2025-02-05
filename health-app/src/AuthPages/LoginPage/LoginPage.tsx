import { Link } from "react-router-dom"
const LoginPage = () => {
  return (
<div className="flex min-h-screen w-screen w-full items-center justify-center text-white bg-slate-900 ">
  <div className="relative">
    
<div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
  </div>
<div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)'/></svg>
  </div>
    <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-700 border bg-slate-900 shadow-lg px-4">
      <div className="flex-auto p-6">
        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <Link to="/" className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
            <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">HEALTH APP</span>
          </Link>
        </div>
        <h4 className="mb-2 font-medium text-white xl:text-xl">Welcome to healthapp!</h4>
        <p className="mb-6 text-gray-500">Please sign-in to access your account</p>

        <form id="" className="mb-4" action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-white">Email or Username</label>
            <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500  focus:text-white focus:shadow" id="email" name="email-username" placeholder="Enter your email or username"  />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="mb-2 inline-block text-xs font-medium uppercase text-white" htmlFor="password">Password</label>
              <Link  to="/forget-password" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                <small className=" ">Forgot Password?</small>
              </Link>
            </div>
            <div className="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password" className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500  focus:text-white focus:shadow" name="password" placeholder="············" />
            </div>
          </div>
          <div className="mb-4">
            <div className="block">
              <input className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow" type="checkbox" id="remember-me"  style={{
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`,
  }} checked />
              <label className="inline-block" htmlFor="remember-me"> Remember Me </label>
            </div>
          </div>
          <div className="mb-4">
            <button className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign in</button>
          </div>
        </form>

        <p className="mb-4 text-center">
          New on HelathApp?
          <a href="#" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"> Create an account </a>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default LoginPage