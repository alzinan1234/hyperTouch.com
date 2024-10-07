"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <div className="relative z-[10000]">
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              color="#000000"
              fill="none"
            >
              <path
                d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <Transition
          as="div"
          show={isOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#242833] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm dark:text-white text-gray-200"
              role="menuitem"
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm dark:text-white text-gray-200"
              role="menuitem"
              id="user-menu-item-1"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm dark:text-white text-gray-200"
              role="menuitem"
              id="user-menu-item-2"
            >
              Sign out
            </a>
          </div>
        </Transition>
      </div>
    </>
  );
};
