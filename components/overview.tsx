const Overview = ({selectedPool}:{selectedPool:string}) => {
    return ( <div className="bg-gradient-to-br from-clinkAccent-100 via-white to-clinkAccent-100 rounded-2xl w-full h-min p-[1px]">
        <div className="w-full h-32 bg-white rounded-t-2xl grid grid-cols-3 gap-8 p-4 text-[#1A1A1A]">
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">clSOL Pools</p>
                <p className=" text-4xl font-semibold">7098.13<span className="text-sm"> clSOL</span></p>
            </div>
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">Total rewards yield</p>
                <p className=" text-4xl font-semibold">283.92<span className="text-sm"> clSOL</span></p>
            </div>
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">Your rewards</p>
                <p className=" text-4xl font-semibold">5.76<span className="text-sm"> clSOL</span></p>
            </div>
        </div>

        <div className="w-full bg-white rounded-b-2xl grid grid-cols-2 gap-8 p-4">
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">Your APR</p>
                <p className=" text-4xl font-semibold">8.76<span className="text-sm">%</span></p>
                <p className="underline">Details:</p>
                <p>Base: 3%</p>
                <p>Remaining APR to distrbute: 4% (283.92 clSOL)</p>
                <p>% of your spending: $1226 / $60372 = 2.03%</p>
                <p>Rewards: 5.76 clSOL (2.03% * 283.92)</p>
            </div>
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">Cash back</p>
                <p className=" font-semibold">Not opened yet at this stage.</p>
                <p>But remember, the more your spent with <span className="font-bold">
                    {selectedPool}
                    </span>
                    , the higher your rewards are🤩!</p>
            </div>
        </div>
    </div> );
}
 
export default Overview;