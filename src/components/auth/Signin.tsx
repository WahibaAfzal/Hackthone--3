// "use client";

// import React, { useState } from "react";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignIn = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation (extend this as needed)
//     if (!email || !password) {
//       setError("Both fields are required!");
//       return;
//     }

//     // Simulate sign-in logic
//     console.log("Sign In:", { email, password });
//     setError(""); // Clear error on successful submission
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
//         {error && (
//           <div className="text-red-600 text-sm mb-4 bg-red-100 p-2 rounded">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSignIn} className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           {/* Password Input */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           {/* Sign In Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//         {/* Additional Links */}
//         <div className="mt-4 text-center text-sm text-gray-500">
//           <p>
//             Don’t have an account?{" "}
//             <a
//               href="/signup"
//               className="text-blue-600 hover:underline hover:text-blue-700"
//             >
//               Sign Up
//             </a>
//           </p>
//           <p>
//             Forgot your password?{" "}
//             <a
//               href="/forgot-password"
//               className="text-blue-600 hover:underline hover:text-blue-700"
//             >
//               Reset it here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







"use client";

import React, { useState } from "react";

type SignInProps = {
  redirectUrl?: string; // Optional argument for redirecting after sign-in
};

const SignIn = ({ redirectUrl }: SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Simulate sign-in logic
    console.log("Sign In:", { email, password });

    // Simulate redirect after successful sign-in
    if (redirectUrl) {
      console.log(`Redirecting to: ${redirectUrl}`);
      window.location.href = redirectUrl; // Use Next.js `router.push` in actual app
    }
    setError(""); // Clear error on successful submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        {error && (
          <div className="text-red-600 text-sm mb-4 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        {/* Additional Links */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline hover:text-blue-700"
            >
              Sign Up
            </a>
          </p>
          <p>
            Forgot your password?{" "}
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline hover:text-blue-700"
            >
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
