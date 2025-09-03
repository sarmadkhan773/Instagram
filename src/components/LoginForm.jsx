export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      {/* Login Box */}
      <div className="w-full max-w-md border border-gray-300 bg-white px-10 py-12 text-center min-h-[500px]">
        
        {/* Logo */}
        <h1 className="text-4xl font-bold mb-8">Instagram</h1>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full mb-3 px-3 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-3 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none text-sm"
        />

        {/* Login Button */}
        <button className="w-full bg-indigo-400 text-white py-2.5 rounded font-semibold mb-6">
          Log in
        </button>

        {/* OR Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-gray-500 font-semibold text-xs tracking-wide">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Facebook Login */}
        <button className="flex items-center justify-center w-full font-semibold text-blue-700 py-2 rounded mb-4">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2 text-sm font-bold">
            f
          </div>
          Log in with Facebook
        </button>

        {/* Forgot password */}
        <a href="#" className="text-blue-900 text-sm">
          Forgot password?
        </a>
      </div>

      {/* Signup Redirect Box */}
      <div className="w-full max-w-md border border-gray-300 bg-white mt-3 p-4 text-center">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>

    </div>
  );
}
