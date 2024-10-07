import PieChart from "./PieChart";
import LineChart from "./LineChart";

const StakePool = ({selectedPool}:{selectedPool:string}) => {
    
    let dataPoints = [{
        name:'10 Sep 2024',
        y:4
    },{
        name:'11 Sep 2024',
        y:6
    },{
        name:'12 Sep 2024',
        y:7.9
    },{
        name:'13 Sep 2024',
        y:10.5
    },{
        name:'14 Sep 2024',
        y:15
    },{
        name:'15 Sep 2024',
        y:19
    },{
        name:'16 Sep 2024',
        y:25
    },{
        name:'17 Sep 2024',
        y:30
    },{
        name:'18 Sep 2024',
        y:37.5
    },{
        name:'19 Sep 2024',
        y:43.1
    },{
        name:'20 Sep 2024',
        y:50
    },{
        name:'21 Sep 2024',
        y:52
    }];

    
  let stakeVol : {name:string;y:number | string; color:string}[] = [];   
  let stakeDate : string[] = [];

  //filter out the tvl date, for category naming
  //filter out the price for high chart to connect the dots as a line
  dataPoints.forEach((d,index)=>{
    let formattedDate = new Date(d.name).toLocaleDateString('en-GB',{ day: 'numeric', month: 'short'});
    stakeDate.push(formattedDate);
    stakeVol.push({name:formattedDate, color:index%2==0 ? "#00D5DA" : "#E48181", y:d.y})
  });


  const spendingData = [
    { name: 'others', y: 60372},
    { name: 'you', y: 1226 },
  ];
  const rewardsData = [
    { name: 'others', y: 283.92 },
    { name: 'you', y: 5.76 },
  ];
  
    return (        
         <div className="bg-gradient-to-br from-clinkAccent-100 via-white to-clinkAccent-100 rounded-2xl w-full h-full p-[3px] ">
            <div className="w-full h-full bg-white rounded-2xl grid grid-cols-2 grid-rows-2 p-4 gap-4 overflow-hidden">
                <div className="col-span-2 w-full p-5 bg-black rounded-2xl">
                    <LineChart stakeVol={stakeVol} stakeDate={stakeDate} chartName={`Your staked clSOL at ${selectedPool}`}/>
                </div>
                <div className="col-span-1 w-full p-5 bg-black rounded-2xl">
                    <PieChart data={spendingData} chartName={`Total spending at ${selectedPool} (usd)`} type='Spent'  />
                </div>
                <div className="w-full p-5 bg-black rounded-2xl">
                    <PieChart data={rewardsData} chartName={`Total rewards at ${selectedPool} (clSOL)`} type='Rewards' />
                </div>
            </div>
        </div> );
}
 
export default StakePool;