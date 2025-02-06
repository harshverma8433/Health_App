import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useRecoilState } from "recoil";
import { RegisterState } from "../../recoil/States/RegisterState";

const RegisterPage = () => {

  const [paswordVisibility , setpaswordVisibility ] = useState(false);
  const [confirmpaswordVisibility , setconfirmpaswordVisibility ] = useState(false);

  const [registerCredentials , setregisterCredentials] = useRecoilState(RegisterState);

  const handleCredentials = (event : ChangeEvent<HTMLInputElement>) => {
    setregisterCredentials((prev) =>( {
      ...prev,
      [event.target.name]: event.target.value
    }))

  }

  console.log(registerCredentials);

  const handleRegistration = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("harsh verma");
    

    
  }
  

  return (
    <motion.div
      className="flex min-h-screen w-full items-center justify-center text-white bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <motion.div
          className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#a)" />
          </svg>
        </motion.div>

        <motion.div
          className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="b" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.5)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#b)" />
          </svg>
        </motion.div>

        <motion.div
          className="relative flex flex-col sm:w-[40rem] rounded-lg border-gray-700 border bg-slate-900 shadow-lg px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-auto p-4">
            <div className="mb-2 flex items-center justify-center">
              <Link to="/" className="flex items-center gap-2 text-indigo-500">
                <motion.span
                  className="text-3xl font-black tracking-tight"
                  whileHover={{ scale: 1.1 }}
                >
                  HEALTH APP
                </motion.span>
              </Link>
            </div>
            
            <p className="mb-6 text-lg text-white">Please Register to access your account</p>

            <form id="" className="mb-4" onSubmit={handleRegistration} method="POST">

            <div className="mb-4">
                <label htmlFor="username" className="mb-2 text-xs font-medium uppercase text-white">
                  UserName 
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
                  id="username"
                  name="username"
                  placeholder="Enter your username "
                  onChange={handleCredentials}
                  required

                />
              </div>

              <div className="flex space-x-6">
                
                <div className="mb-6 w-[50%]">
                  <label htmlFor="firstname" className="mb-2  text-xs font-medium uppercase text-white">
                    FirstName 
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your firstname "
                    onChange={handleCredentials}
                    required
                  />
                </div>
                <div className="mb-6 w-[50%]">
                  <label htmlFor="lastname" className="mb-2 text-xs font-medium uppercase text-white">
                    LASTNAME 
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your lastname "
                    onChange={handleCredentials}
                    required

                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 text-xs font-medium uppercase text-white">
                  Email 
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
                  id="email"
                  name="email"
                  placeholder="Enter your email "
                  onChange={handleCredentials}
                  required

                />
              </div>
              

              <div className="flex space-x-6">
                <div className="my-4 w-[50%]">
                  <div className="flex justify-between">
                    <label className="mb-2 text-xs font-medium uppercase text-white" htmlFor="password">
                      Password
                    </label>
                    
                  </div>
                  <div className="relative flex">
                    <div className=" flex w-full">
                      <input
                        type={paswordVisibility ? "text" : "password"}
                        id="password"
                        className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500"
                        name="password"
                        placeholder="············"
                        onChange={handleCredentials}
                        required


                      />
                    </div>
                      <div onClick={() => setpaswordVisibility(!paswordVisibility)} className="absolute right-4 cursor-pointer   top-3"> 
                        {
                          paswordVisibility ? <Eye size={16} /> : <EyeOff size={16}/>
                        }
                        
                      </div>
                  </div>
                </div>
                <div className="my-4 w-[50%] ">
                  <div className="flex justify-between">
                    <label className="mb-2 text-xs font-medium uppercase text-white" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    
                  </div>
                  <div className="relative flex">
                    <div className=" flex w-full">
                      <input
                        type={confirmpaswordVisibility ? "text" : "password"}
                        id="confirmpassword"
                        className="block w-full rounded-md border border-gray-400 bg-transparent py-2 px-3 text-sm outline-none focus:border-indigo-500"
                        name="confirmpassword"
                        placeholder="············"
                        onChange={handleCredentials}
                        required


                      />
                    </div>
                      <div onClick={() => setconfirmpaswordVisibility(!confirmpaswordVisibility)} className="absolute right-4 cursor-pointer   top-3"> 
                        {
                          confirmpaswordVisibility ? <Eye size={16} /> : <EyeOff size={16}/>
                        }
                        
                      </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 mt-2 ">
                <button
                  className="grid cursor-pointer w-full rounded-md border border-indigo-500 bg-indigo-500 py-2 text-white shadow-md hover:border-indigo-600 hover:bg-indigo-600 focus:border-indigo-600 focus:bg-indigo-600"
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mb-4 text-center">
              Already have an account?
              <Link to="/login" className="text-indigo-500">
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
