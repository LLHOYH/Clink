'use client'

import { Switch } from '@headlessui/react'
import { useState } from 'react'

const Settings = ({selectedPool}:{selectedPool:string;}) => {
    const [enabled, setEnabled] = useState(false)

    return ( 
            <div className="bg-[#FFF7F0] flex p-4 rounded-2xl flex-col gap-1">
                <p className="text-[#005F73]">Direct spending of funds</p>
                <p className="text-sm">Available rewards:<span className="text-4xl font-semibold"> 3.6</span> clSOL</p>
                <p className="text-sm">Used rewards: 2.2 clSOL</p>
                <div className="text-sm flex gap-1">Allow <span className='font-bold'>{selectedPool}</span> to directly use your rewards to pay?</div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-green-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
            </div>
        );
}
 
export default Settings;