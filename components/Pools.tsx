'use client' 
import { useState } from "react";
import { BGImageDiv } from "./BGImageDiv";
import StakePool from "./stakepool";
import Overview from "./overview";
import Settings from "./Settings";
import { SpinnerCircular, SpinnerRoundOutlined } from 'spinners-react';

const Pools = () => {
    const [selectedPool, setSelectedPool] = useState<string>('RIPE')
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (poolname:string)=>{
        setIsLoading(true);
        setTimeout(()=>{
            setSelectedPool(poolname.toUpperCase())
            setIsLoading(false)
        },2000)
    }

    return (
        <div className="max-w-7xl w-5/6">
            <h2 className="text-3xl font-bold">Choose your pool</h2>

            <br/>

            <div className="flex items-center gap-12">

                <BGImageDiv name='ripe' imageUrl="/ripe.jpg"  handleClick={handleClick}/>
                <BGImageDiv name='basedapp' imageUrl="/basedapp.png" handleClick={handleClick}/>
                <BGImageDiv name='bitpay' imageUrl="/bitpay.svg" handleClick={handleClick}/>
                <BGImageDiv name='stables' imageUrl="/stables.png" handleClick={handleClick}/>
                <BGImageDiv name='shopify' imageUrl="/shopify.png" handleClick={handleClick}/>
                <BGImageDiv name='rain' imageUrl="/rain.svg" handleClick={handleClick}/>
            </div>

            <br/>
            
            {isLoading && 
            
            <div className="w-full min-h-[400px] flex items-center justify-center">
                <SpinnerRoundOutlined enabled={isLoading}/>
            </div>
            }
        
            {!isLoading && 
            <>
                <Overview selectedPool={selectedPool.toUpperCase()} />
                <br/>
                <StakePool selectedPool={selectedPool}/>

                <br />

                <Settings selectedPool={selectedPool} />
            </>
            }

        </div>
    );
}
 
export default Pools;



