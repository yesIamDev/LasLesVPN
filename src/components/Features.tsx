import React,{FunctionComponent} from "react";
import illustration from '../images/Illustration 2.png'
import check from '../images/Group 1120.png'

const Features:FunctionComponent = () => {
    return(
        <div className="w-full bg-white my-8">
            <div className="grid grid-cols-2 gap-x-24 max-w-5xl mx-auto">
                <div>
                    <img src={illustration} alt="" />
                </div>
                <div className="font-Rudik mt-20 flex flex-col items-start">
                    <h2 className="text-4xl font font-semibold">
                        We Provide Many <br /> Features You Can Use
                    </h2>
                    <p className="text-xs mt-5 text-gray-500">You can explore the features that we provide with fun and <br /> have their own functiond each feature.</p>
                    <ul className="font-Rudik my-5 text-xs text-gray-500">
                        <li className="flex my-4">
                            <img src={check} alt="" />
                            <h3 className="ml-2">Powerfull Online Protection</h3>
                        </li>
                        <li className="flex my-4">
                            <img src={check} alt="" />
                            <h3 className="ml-2">Internet Without borders</h3>
                        </li>
                        <li className="flex my-4">
                            <img src={check} alt="" />
                            <h3 className="ml-2">SuperCharged VPN</h3>
                        </li>
                        <li className="flex my-4">
                            <img src={check} alt="" />
                            <h3 className="ml-2">No specific time limits</h3>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;