import React, { useState } from 'react'
import { useTheme } from '../context/themeContext'
import DensityRow from './DensityRow';

export default function LetterDensity({ text }) {
    const { isLight } = useTheme()
    const [collapsed, setCollapsed] = useState(false);

    let letters = new Set(text.replace(/[^a-zA-Z]/g, "").trim("").split("").filter((data) => data.toLowerCase()))


    return (
        <div className="w-full flex flex-col space-y-5 px-5 md:px-0 pb-5">
            <h5 className={`${isLight ? "text-black" : "text-white"} text-[24px] font-bold`}>Letter Density</h5>
            {text.trim() === "" ? <p className={`${isLight ? "text-[rgb(64,66,84)]" : "text-[rgb(228,228,239)]"} text-[16px]`}>No characters found. Start typing to see letter density.</p> :
                <>
                    <ul className="w-full flex flex-col space-y-2">
                        {
                            [...letters].slice(0, collapsed ? letters.size : 5).map((data) => <DensityRow text={text} char={data} key={data} />)
                        }

                    </ul>
                    <button onClick={() => setCollapsed(prev => !prev)} className={`${!isLight ? "text-[rgb(228,228,239)]" : "text-[rgb(18,19,26)]"} flex flex-row items-center space-x-2 cursor-pointer`}>
                        <span className={`font-light text-[17px]`}>See more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className={`${!collapsed ? "rotate-0" : "rotate-180"} size-4`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </>}
        </div>
    )
}
