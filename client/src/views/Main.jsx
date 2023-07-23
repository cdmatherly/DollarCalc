import React, { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import NumPad from '../components/NumPad';

export default () => {
    const [need, setNeed] = useState('0')
    const [have, setHave] = useState('0')
    const [showNeedNumPad, setShowNeedNumPad] = useState(false)
    const [showHaveNumPad, setShowHaveNumPad] = useState(false)

    const handleShowNeed = () => {
        if (!showNeedNumPad) {
            setShowNeedNumPad(true); 
            setShowHaveNumPad(false)
        } else {
            setShowNeedNumPad(false);
        }
    }

    const handleShowHave = () => {
        if (!showHaveNumPad) {
            setShowHaveNumPad(true); 
            setShowNeedNumPad(false)
        } else {
            setShowHaveNumPad(false);
        }
    }



    return (
        <div className='flex flex-col w-full h-screen gap-5 p-10'>
            <div className='flex items-center justify-between'>
                <p>I need</p>
                <p onClick={() => {handleShowNeed()} } className={Number(have) < Number(need) ? 'w-28 h-28 flex items-center justify-center p-10 bg-red-500' : 'w-28 h-28 flex items-center justify-center p-10 border border-black'}>${need}</p>
                { showNeedNumPad && <span className='absolute right-10'>|</span>}
            </div>
            <div className='flex items-center justify-between'>
                <p>I have</p>
                <p onClick={() => {handleShowHave()} } className={Number(have) >= Number(need) && have != 0 ? 'w-28 h-28 flex items-center justify-center p-10 bg-green-500' : 'w-28 h-28 flex items-center justify-center p-10 border border-black'}>${have}</p>
                { showHaveNumPad && <span className='absolute right-10'>|</span>}
            </div>
            { showNeedNumPad && !showHaveNumPad ?
                <NumPad set={setNeed} num={need} setShow={setShowNeedNumPad}/>
                :
            showHaveNumPad && !showNeedNumPad &&
                <NumPad set={setHave} num={have} setShow={setShowHaveNumPad}/>
            }
            
        </div>
    )
}