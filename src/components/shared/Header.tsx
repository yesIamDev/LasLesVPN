import React, { FunctionComponent, Fragment } from "react";
import classNames from "classnames";
import {
  HiOutlineSearch,
  HiOutlineChatAlt,
  HiOutlineBell,
} from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-12 px-5 flex justify-between items-center border border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={15}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="search..."
          className=" pl-8 text-sm focus:outline-none active:outline-none h-7 px-4 rounded-sm w-{24rem} border border-gray-300"
        />
      </div>
      <div className="flex items-center gap-2 mr-3">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-sm ring-black ring-opacity-5 px-2 py-2.5 font-Rubik">
                    <strong className="text-gray-700 font-sm">Messages</strong>
                    <div className="mt-2 py-1 font-sm">
                      This is messages Panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-sm ring-black ring-opacity-5 px-2 py-2.5 font-Rubik">
                    <strong className="text-gray-700 font-sm">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 font-sm">
                      This is a notifications Panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative text-left">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-7 w-7 rounded-full bg-sky bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80X80?face',
                }}
              >
                <span className="sr-only">David keukeu</span>
              </div>
            </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded shadow-md p-1 bg-white ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => navigate("/profile")}>
                      Your Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-gray-700 focus:bg-gray-200 block" onClick={() => navigate("/settings")}>
                      Settings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => navigate("/signout")}>
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
