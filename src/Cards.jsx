import React from "react"

const Cards = ({name,link}) => {
  return (
    <div>
    <div className=" flex bg-gray-300  m-4 p-4  justify-center pb-0.5  w-40 pl-0.5 pr-0.5 shadow-md">
        <div className="h-full w-full p-0">
            <div className="h-40 w-10">
                {name}<br/>
                {link}
            </div>
            <button className="bg-white w-full pb-0.5" >Download</button>
        </div>
    </div>
    </div>
  )
};

export default Cards;
