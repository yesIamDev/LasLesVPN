import React, {FunctionComponent} from "react";

const Testimonials: FunctionComponent = () => {
    return(
        <div className="max-w-5xl mx-auto bg-white flex flex-col text-center items-center justify-center font-Rubik my-6">
            <h2 className="font-semibold text-3xl">Trusted by Thousands of</h2>
            <h2 className="font-semibold text-3xl">Happy costomer</h2>
            <p className="text-xs text-gray-500 my-4">
                These are the stories of our customers who have joined with great
            </p>
            <p className="text-xs text-gray-500">
                pleasur when using this crazy features
            </p>
        </div>
    )
}

export default Testimonials;