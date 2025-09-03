export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Sign Up Box */}
      <div className="w-full max-w-md border border-gray-300 bg-white px-10 py-12 text-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold mb-6">Instagram</h1>

        {/* Small tagline */}
        <p className="text-gray-500 font-semibold mb-4">
          Sign up to see photos and videos from your friends.
        </p>

        {/* Facebook Sign Up */}
        <button className="flex items-center justify-center w-full font-semibold text-white bg-indigo-500 py-2 rounded mb-4">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600 mr-2 text-sm font-bold">
            f
          </div>
          Log in with Facebook
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-gray-500 font-semibold text-xs tracking-wide">
            OR
          </span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Mobile Number or Email"
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none"
        />
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm focus:outline-none"
        />

        {/* Sign Up Button */}
        <button className="w-full bg-indigo-400 text-white py-2 rounded font-semibold mb-4">
          Sign up
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 leading-5">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a href="#" className="font-semibold text-blue-700">
            Learn More
          </a>
        </p>

        <br />

        <p className="text-xs text-gray-500 leading-5">
          By signing up, you agree to our{" "}
          <a href="#" className="font-semibold text-blue-700">
            Terms
          </a>
          ,{" "}
          <a href="#" className="font-semibold text-blue-700">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold text-blue-700">
            Cookies Policy
          </a>
          .
        </p>
      </div>

      {/* Login Redirect Box */}
      <div className="w-full max-w-md border border-gray-300 bg-white mt-3 p-4 text-center">
        <p className="text-sm">
          Have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
