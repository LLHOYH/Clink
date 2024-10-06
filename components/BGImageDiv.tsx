import React from "react";

export const BGImageDiv = ({ name, imageUrl, className,handleClick, children }:{name:string; imageUrl:string; className?:string; handleClick:(poolName:string)=>void; children?:React.ReactElement}) => {
    return (
      <button 
        className={`bg-contain bg-center bg-no-repeat w-36 h-16 p-4 hover:border-b hover:border-black ${className}`}  
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={()=>handleClick(name)}
      >
        {children}
      </button>
    );
  };