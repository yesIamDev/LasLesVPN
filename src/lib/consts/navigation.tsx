import {
  HiOutlineViewGrid,
} from "react-icons/hi";

import {CgProfile} from "react-icons/cg"
import {GrTransaction} from "react-icons/gr"
import {BiArrowFromLeft, BiArrowFromRight} from "react-icons/bi"

export const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "clients",
    label: "Clients",
    path: "/clients",
    icon: <CgProfile />,
  },
  {
    key: "retraits",
    label: "Retraits",
    path: "/retraits",
    icon: <BiArrowFromRight />,
  },
  {
    key: "depots",
    label: "Depots",
    path: "/depots",
    icon: <BiArrowFromLeft />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <GrTransaction />,
  },
];

