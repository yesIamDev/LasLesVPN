import React, { FunctionComponent } from "react";
import glob from "../images/Huge Global.png";
import sponsor from '../images/Sponsored.png'

const Location: FunctionComponent = () => {
  return (
    <div
      id="location"
      className="max-w-5xl mx-auto bg-white  my-6 flex flex-col text-center justify-center items-center font-Rubik"
    >
      <h2 className="font-semibold text-2xl"> Huge Global Network</h2>
      <h2 className="font-semibold text-2xl">of Fast VPN </h2>
      <p className="m-3 text-xs text-gray-500">
        Seen <span className="font-semibold">LasLesVPN</span> everywhere to make
        it easier for you when you move location
      </p>
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <img src={glob} alt="" className="mt-20" />
      </div>
      <img src={sponsor} alt="" className="mt-8 hover: scale-100"/>
    </div>
  );
};

export default Location;
