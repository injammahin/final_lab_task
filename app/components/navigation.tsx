import Link from "next/link";

const Navber = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Home
            </Link>
            <Link
              href="/login"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign In
            </Link>
            <Link
              href="/registrations"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
