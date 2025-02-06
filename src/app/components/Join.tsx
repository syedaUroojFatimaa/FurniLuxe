export default function Home() {
    return (
      <div className="flex justify-center items-center pt-12 ">
        <div className="bg-slate-50 rounded shadow-md p-8 h-full w-[1100px] text-center">
          <h1 className="text-3xl font-normal text-gray-800 mb-8">
            Join the club and get the benefits
          </h1>
          <p className="text-gray-600 font-normal text-lg mb-0">
            Sign up for our newsletter and receive exclusive offers on new
          </p>
          <p className="text-gray-600 font-normal text-lg mb-6">
          ranges,
          sales, pop-up stores, and more.
          </p>
          <form className="flex items-center justify-center mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full max-w-md px-4 py-4 border border-gray-300 "
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gray-950 mr-7 text-white hover:bg-gray-700 transition duration-300"
            >
              Sign up
            </button>
          </form>

        </div>
      </div>
    );
  }

 