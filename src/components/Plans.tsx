import React, { FunctionComponent } from "react";
import illustration from "../images/Free.png";
import check from "../images/Group 1120.png";

const PlanCard: FunctionComponent = () => {
  return (
    <div
      id="title"
      className=" w-full m-12 text-center font-Rubik flex flex-col"
    >
      <h2 className="font-semibold text-3xl"> Choose Your Plan</h2>
      <p className="text-xs m-3 text-gray-500">
        Let's choose the package that is best for you and explore it happily and{" "}
        <br /> cheerfully
      </p>
      <div className=" max-w-5xl mx-auto grid grid-cols-3 gap-x-6 gap-y-4 mt-8">
        <div className="flex flex-col p-8 border shadow items-center justify-center w-[300px] hover:shadow">
          <img src={illustration} alt="" className="w-[145px] my-10" />
          <h2 className="text-center text-lg font-bold mt-6">Free Plan</h2>
          <ul className="text-xs font-Rudik mt-4">
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Unlimited bandwitch</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Encrypted connection</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">No traci logs</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Work on all devices</h3>
            </li>
          </ul>
          <h2 className="mt-10 text-center font-Rudik font-bold text-3xl"> Free </h2>
          <button className=" text-[#F53838] font-semibold px-12 py-2  mt-3 border border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white">Select</button>
        </div>
        <div className="flex flex-col p-8 border shadow items-center justify-center w-[300px] hover:shadow">
          <img src={illustration} alt="" className="w-[145px] my-10" />
          <h2 className="text-center text-lg font-bold mt-6">Standard Plan</h2>
          <ul className="text-xs font-Rudik mt-4">
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Unlimited bandwitch</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Encrypted connection</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">No traci logs</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Work on all devices</h3>
            </li>
          </ul>
          <h2 className="mt-10 text-center font-Rudik font-bold text-3xl"> Free </h2>
          <button className=" text-[#F53838] font-semibold px-12 py-2  mt-3 border border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white">Select</button>
        </div>
        <div className="flex flex-col p-8 border shadow items-center justify-center w-[300px] hover:shadow">
          <img src={illustration} alt="" className="w-[145px] my-10" />
          <h2 className="text-center text-lg font-bold mt-6">Premium Plan</h2>
          <ul className="text-xs font-Rudik mt-4">
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Unlimited bandwitch</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Encrypted connection</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">No traci logs</h3>
            </li>
            <li className="flex my-3">
              <img src={check} alt="" />
              <h3 className="ml-2">Work on all devices</h3>
            </li>
          </ul>
          <h2 className="mt-10 text-center font-Rudik font-bold text-3xl"> Free </h2>
          <button className=" text-[#F53838] font-semibold px-12 py-2  mt-3 border border-[#F53838] rounded-full hover:bg-[#F53838] hover:text-white">Select</button>
        </div>
       
      </div>
    </div>
  );
};

export default PlanCard;
