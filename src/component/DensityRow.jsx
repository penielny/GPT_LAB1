import React from 'react'
import { letterDensity } from '../util/conuter'
import { useTheme } from '../context/themeContext'

export default function DensityRow({ char, text }) {
    const { isLight } = useTheme()
    let { total, percentage } = letterDensity(text, char)

    return (
        <li className={`${isLight ? "text-black" : "text-white"} flex flex-row items-center space-x-5`}>

            <div className='w-6'>
                <p className='uppercase'>{char}</p>
            </div>

            <div className={`flex-1 rounded-xl overflow-hidden ${!isLight ? "bg-gray-800" : "bg-slate-100"}`}>
                <div style={{width: `${percentage}%`}} className={`p-2 bg-[rgb(211,160,250)] rounded-xl`}></div>
            </div>
            <div className="flex flex-row items-center space-x-2">
                <p>{total}</p>
                <p>({percentage}%)</p>
            </div>
        </li>
    )
}
