import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";
import img1 from '../assets/pic1lg.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'

const Cta3 = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mx-auto container flex justify-center items-center md:mt-20 py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Welcome To Authenticate</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                        <p className="text-base leading-6 text-gray-600">Here, an user can authenticate using google or create an account using email password. Powered by Firebase.!</p>
                    </div>
                    <div className="mt-16 w-full">
                    {user && user.uid ? (
              <Link to="profile">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50"
                >
                  Visit Profile
                </button>
              </Link>
            ) : (
              <>
                <Link to="login">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50"
                  >
                    Login
                  </button>
                </Link>

                <Link to="register">
                  {" "}
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
                  >
                    Register
                  </button>
                </Link>
              </>
            )}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div className="border border-gray-500">
                        <img className="hidden lg:block" src={img1} alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src={img1} alt="sofa" />
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div className="border border-gray-500">
                            <img className="hidden lg:block" src={img2} alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src={img2} alt="chairs" />
                        </div>
                        <div className="border border-gray-500">
                            <img className="hidden lg:block" src={img3} alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src={img3} alt="chairs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta3;
