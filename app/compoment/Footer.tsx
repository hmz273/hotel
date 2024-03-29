import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl bg-white rounded-lg shadow dark:bg-gray-900 mt-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="#"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://pics.uncubus.tech/images/11242/upload/be88bb7d0090acfe694ae3b2b4b3e3ad.jpg"
                  className="h-8"
                  alt="Siraya"
                />
                <span className="self-center text-2xl text-purple-800 font-semibold whitespace-nowrap dark:text-white">
                  Siraya
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Siraya™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
  )
}

export default Footer