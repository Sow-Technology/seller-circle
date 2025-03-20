// import AdminLoginIndex from ".";

// const AdminLoginPage = () => {
//   return (
//     <>
//       <AdminLoginIndex />
//     </>
//   );
// };
// export default AdminLoginPage;



"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AdminLoginAction } from "@/store/slices/AuthSliceAdmin";
import { setLocalStorage } from "@/utils/Localstoragefunc";
import { useSnackbar } from "notistack";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await dispatch(AdminLoginAction(data)).unwrap();
      if (response) {
        const { token, authType, id } = response.data;
        setLocalStorage("authData", { authType, token, id });
        router.push("/admin/dashboard");
        enqueueSnackbar("Login successful", { variant: "success" });
      } else {
        router.push("/adminlogin");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Login failed. Please check your credentials.", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Panel - Login Form */}
        <div className="flex w-full flex-col justify-center px-4 py-12 md:w-1/2 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Admin Login
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Enter your credentials to access the admin dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition duration-200"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div> */}

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium ${
                    isLoading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  } transition duration-200`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  By logging in, you agree to our
                  <Link
                    href="/terms"
                    className="font-medium text-blue-600 hover:text-blue-800 transition duration-200"
                  >
                    {" "}
                    Terms of Service
                  </Link>
                  <span> & </span>
                  <Link
                    href="/privacy"
                    className="font-medium text-blue-600 hover:text-blue-800 transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Branding/Image */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600">
          <div className="flex h-full w-full items-center justify-center p-12">
            <div className="max-w-lg text-center">
              <div className="mb-6 flex justify-center">
                <svg
                  className="h-16 w-16 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Welcome to Admin Portal
              </h1>
              <p className="text-blue-100 text-lg">
                Manage your application, users, and content from a single
                dashboard.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-white opacity-75"></div>
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <div className="h-2 w-2 rounded-full bg-white opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
