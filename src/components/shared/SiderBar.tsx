import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcBearish } from "react-icons/fc";

import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";

import { HiOutlineLogout } from 'react-icons/hi'

import classNames from "classnames";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2  hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const SideBar: FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-neutral-900 w-600 p-3 flex flex-col text-white font-Rubik">
      <div className="flex items-center gap-1 px-1 py-3">
        <FcBearish fontSize={24} />
        <span className="text-neutral-100 text-lg">ManShop</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={classNames(
              pathname === item.path ? "text-white" : "text-neutral-400",
              linkClasses
            )}
          >
            <span className="text-sm">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="border-t border-neutral-700 pt-2F">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <Link
            to={item.path}
            key={item.key}
            className={classNames(
              pathname === item.path ? "text-white" : "text-neutral-400", 'my-2',
              linkClasses
            )}
          >
            <span className="text-sm">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={classNames(
        'text-red-500 cursor-pointer', linkClasses
      )}>
        <span className="text-sm">
            <HiOutlineLogout/>
        </span>
        Log Out
      </div>
    </div>
  );
};

export default SideBar;
