import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import {Link} from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    user,
    isLoading,
    authError,
    loginWithGoogle,
    registerUser,
    loginUser,
    logout,
  } = useFirebase();

  // register
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);

    const { name, email, password, rePassword } = data;

    if (password !== rePassword) {
      // console.log('not matched')
      alert("Your password did not match");
    } else {
      console.log("matched");
      // registerUser(name, email, password, history);
    }
  };

  // useNavigate usage
  // const location = useLocation();
  // const history = useHistory()
  // const redirect_uri = location.state?.from || "/home"

  // Google login
  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      console.log("google login done");
      // history.push(redirect_uri)
    });
  };

  return (
    <div className="p-2">
      <div className="w-full flex flex-wrap">
        {/* <!-- Login Section --> */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            {/* <a href="#" className="bg-black text-white font-bold text-xl p-4" >Logo</a> */}
          </div>

          <div className="flex flex-col justify-center md:justify-start mt-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Please Register here</p>

            {/* form */}
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col pt-4">
                {/* name */}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col pt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col pt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Phone Number <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="Mobile-number"
                  {...register("Mobile-number", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                />
              </div>

              {/* Option Selection */}
              <div className="mt-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Are you? <span className="text-red-500 text-xs">*</span>
                </label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  required
                  {...register}
                >
                  <option>Customer</option>
                  <option>Resturant owner</option>
                  <option>Rider</option>
                </select>

                <div className="pointer-events-none mt-7 absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="flex pt-4 ">
                <div className="w-1/2 mr-2">
                  <label htmlFor="password" className="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 6 })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="w-1/2 ml-2">
                  <label htmlFor="password" className="text-lg">
                    Re-Type Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Retype_Password"
                    {...register("rePassword", {
                      required: true,
                      maxLength: 6,
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Register"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="underline font-semibold">
                  Login here.
                </Link>
              </p>
            </div>
          </div>

          <div className="text-center">
            <br />{" "}
            <strong className=" text-center text-decoration-line: underline">
              Customers can easy login via
            </strong>
          </div>
          <div className="mb-5">
            <div className="w-1/2 mx-auto flex items-center justify-between py-5">
              <hr className="w-1/2 bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 ">OR </p>
              <hr className="w-1/2 bg-gray-400  " />
            </div>

            {/* Social login */}
            <div className="flex justify-center px-5">
              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-80 mr-5"
              >
                <FcGoogle />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with Google
                </p>
              </button>

              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-80 "
              >
                <FaFacebookF className="fill-blue-700" />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with Facebook
                </p>
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Hungry Kitchen Ltd. All rights reserved.
          </p>
        </div>

        {/* <!-- Image Section --> */}
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1641301547846-2cf73f58fdca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
