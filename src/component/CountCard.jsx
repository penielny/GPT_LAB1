import React from 'react'

export default function CountCard({ total, label , image , color }) {
    return (
        <div className={`relative flex items-center justify-center  overflow-none overflow-hidden ${color} rounded-xl w-full md:w-1/3 h-[9.6rem]`}>
            <div className="flex flex-col space-y-1 flex-1 px-3">
                <h4 className="font-bold text-5xl">{total}</h4>
                <p>{label}</p>
            </div>
            <div className="absolute -right-8">
                <img src={image} />
            </div>
        </div>
    )
}
