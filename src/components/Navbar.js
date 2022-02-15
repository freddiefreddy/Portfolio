import React, {useState} from "react";
// import { ScrollLink } from "react-scroll/modules";
import {Transition} from "@headlessui/react";
 


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <nav className="bg-gray-800 md:sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <a className="ml-3 text-xl" href="#">Fredrick Mwenda</a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#about"
                                className=" hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </a>

                            <a href="#projects"
                                className=" hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Projects
                            </a>

                            <a href="#skills"
                                className=" hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Skills
                            </a>

                            <a href="#contact"
                                className=" hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Hire Me
                            </a>



                            
                                {/* <ScrollLink className="mr-5 hover:text-white" to="example-projects" spy={true} smooth={true} offset={-50} duration={500}>
                                    Projects                      
                                </ScrollLink> */}                    
      
                        </div>
                    </div>                    
                </div>
                {/* <div className="ml-10 flex items-baseline ">
                    <button className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none;">Hire Me</button>
                </div> */}
                
            
        <div className="-mr-2 flex md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
            </button>


            </div>
        </div>
        </div>

        <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"     
        >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                        href="#about"
                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        About
                        </a>

                        <a
                        href="#projects"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Projects
                        </a>

                        <a
                        href="#skills"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Skills
                        </a>

                        <a
                        href="#contact"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        Contact
                        </a>

                        {/* <button className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none;">Hire Me</button> */}


                    
                    </div>
                </div>
            )}
        </Transition>

    </nav>
    );

}

export default Navbar;
