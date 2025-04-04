import React from 'react'
import { useTheme } from '../context/themeContext'

export default function LetterDensity({ text }) {
    const { isLight } = useTheme()
    return (
        <div className="w-full flex flex-col space-y-5 px-5 md:px-0">
            <h5 className={`${isLight ? "text-black" : "text-white"} text-[24px] font-bold`}>Letter Density</h5>
            {text.trim() === "" ? <p className={`${isLight ? "text-[rgb(64,66,84)]" :"text-[rgb(228,228,239)]"} text-[16px]`}>No characters found. Start typing to see letter density.</p> :
                <>
                    <ul className="w-full flex flex-col space-y-2">
                        {
                            [{ char: "E" }, { char: "I" }, { char: "T" }, { char: "O" }, { char: "N" }].map((data) => <li key={data.char} className={`${isLight ? "text-black" : "text-white"} flex flex-row items-center space-x-5`}>

                                <div className='w-6'>
                                    <p>{data.char}</p>
                                </div>

                                <div className={`flex-1 rounded-xl overflow-hidden ${!isLight ? "bg-gray-800" : "bg-slate-100"}`}>
                                    <div className={`w-[10%] p-2 bg-[rgb(211,160,250)] rounded-xl`}></div>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <p>40</p>
                                    <p>(1606%)</p>
                                </div>
                            </li>)
                        }

                    </ul>
                    <button className='flex flex-row items-center space-x-2 cursor-pointer'>
                        <span className='font-light text-sm'>See more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </>}
        </div>
    )
}
