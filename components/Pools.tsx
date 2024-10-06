'use client' 
import { useState } from "react";
import { BGImageDiv } from "./BGImageDiv";
import StakePool from "./stakepool";
import Overview from "./overview";

const Pools = () => {
    const [selectedPool, setSelectedPool] = useState<string>('ripe')

    const handleClick = (poolname:string)=>{
        setSelectedPool(poolname)
    }

    return (
        <div className="max-w-7xl w-5/6">
            <h2 className="text-3xl font-bold">Choose your pool</h2>
            <br/>

            <div className="flex items-center gap-12">
                <BGImageDiv name='ripe' imageUrl="/ripe.jpg"  handleClick={handleClick}/>
                <BGImageDiv name='rain' imageUrl="/rain.svg" handleClick={handleClick}/>
                <BGImageDiv name='basedapp' imageUrl="/basedapp.png" handleClick={handleClick}/>
                <BGImageDiv name='bitpay' imageUrl="/bitpay.svg" handleClick={handleClick}/>
            </div>
            <br/>
            <Overview selectedPool={selectedPool.toUpperCase()} />
            <br/>

            <StakePool selectedPool={selectedPool}/>


        </div>
    );
}
 
export default Pools;



