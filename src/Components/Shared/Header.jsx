import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from './../../assets/images.png'
import { AuthContext } from "../../providers/Authprovider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
    const hanldeLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-indigo-300 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between text-white font-semibold">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img className="h-10 " src={logo} alt="" />

          <span className="ml-2 text-xl font-bold tracking-wide ">
            Build A Twin
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-700 text-xl font-semibold" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          {user ? (
            <li>
              {user && (
                <div className="flex">
                  <img
                    className="h-14 rounded-full"
                    src={user?.photoURL}
                    alt=""
                    title={user.displayName}
                  />{" "}
                  <button className="pl-4" onClick={hanldeLogOut}>
                    Log Out
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                aria-label="Home"
                title="login"
                className={({ isActive }) =>
                  isActive ? "text-blue-700 text-xl font-semibold" : "default"
                }
              >
                Login
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-blue-700 text-xl font-semibold" : "default"
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive ? "text-blue-700 text-xl font-semibold" : "default"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToys"
              className={({ isActive }) =>
                isActive ? "text-blue-700 text-xl font-semibold" : "default"
              }
            >
              All Toys
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img className="h-10 " src={logo} alt="" />

                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Build A Twin
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myToys"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        My Toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/allToys"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        All Toys
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
