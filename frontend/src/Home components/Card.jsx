import React from "react";

function Card({heading, detail, image}) {
    return (
        <>
            <div className="flex flex-col w-full min-h-[50vh] gap-5 hover:-translate-y-1
             hover:shadow-purple-400 shadow-lg bg-black text-white rounded-xl 
             hover:text-purple-400 hover:ease-in-out duration-500 aspect-square">
                <h2 className="px-2 pt-2  font-semibold">{heading}</h2>
                <p className="px-2">{detail}</p>
                <img src={image} className="h-full overflow-y-hidden object-cover rounded-b-xl"></img>
            </div>
        </>
    )
}

export default Card