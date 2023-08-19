import React from "react";
import { IoBagHandle } from "react-icons/io5";

function DashboardStatsGrid() {
  return (
    <div className="flex gap-2 w-full m-2">
      <Boxwrapper>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-xl text-white" />
        </div>
        <div className="pl-3">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5313.46
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </Boxwrapper>
      <Boxwrapper>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-red-500">
          <IoBagHandle className="text-xl text-white" />
        </div>
        <div className="pl-3">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5313.46
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </Boxwrapper>
      <Boxwrapper>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-green-500">
          <IoBagHandle className="text-xl text-white" />
        </div>
        <div className="pl-3">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5313.46
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </Boxwrapper>
      <Boxwrapper>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-500">
          <IoBagHandle className="text-xl text-white" />
        </div>
        <div className="pl-3">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5313.46
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </Boxwrapper>
    </div>
  );
}

export default DashboardStatsGrid;

function Boxwrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-2 flex-1 border border-gray-200 flex  items-center">
      {children}
    </div>
  );
}
