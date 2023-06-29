import React, { FunctionComponent } from "react";
import user from "../images/user.png";
import server from "../images/Server.png";
import location from "../images/location.png";

const Brand: FunctionComponent = () => {
  return (
    <section id="brand" className="w-full bg-white flex">
      <div className="w-[1140px] h-[200px] my-4 rounded-md shadow mx-auto">
        <div className="grid grid-cols-3 gap-0 divide-x my-6 font-Rubik">
          <div className="flex justify-center items-center p-12 ">
            <img src={user} alt="" className="mr-4" />
            <div>
              <h2 className="font-bold text-lg">90+</h2>
              <p className="text-gray-500">Users</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-12">
            <img src={location} alt="" className="mr-4" />
            <div>
              <h2 className="font-bold text-lg">30+</h2>
              <p className="text-gray-500">Locations</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-12">
            <img src={server} alt="" className="mr-4" />
            <div>
              <h2 className="font-bold text-lg">50+</h2>
              <p className="text-gray-500">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
