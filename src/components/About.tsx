import React, { FunctionComponent } from "react";
import illstration from "../images/Illustration 1.png";

const AboutSection: FunctionComponent = () => {
  return (
    <div id="AboutSection" className="bg-white w-full py-16 font-Rubik">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start pt-4">
          <h2 className="font-Rubik text-4xl leading-relaxed">
            We want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h2>
          <p className="text-xs leading-loose mb-5">
            Provide a network for all your needs with easy and fun using{" "}
            <span className="font-semibold">LaslesVPN</span> <br /> discover
            interesting features from us
          </p>
        </div>
        <div>
          <img src={illstration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
