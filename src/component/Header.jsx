import React from 'react'
import moonIcon from './../assets/images/icon-moon.svg'
import sunIcon from './../assets/images/icon-sun.svg'
import LightLogoIcon from './../assets/images/logo-light-theme.svg'
import DarkLogoIcon from './../assets/images/logo-dark-theme.svg'
import { useTheme,ThemeState } from '../context/themeContext'
export default function Header() {
   const {theme, setTheme,isLight} =  useTheme()


    function toggleTheme(){
        if (isLight){
            setTheme(ThemeState.dark)
            return
        }
        setTheme(ThemeState.light)
    }

    return (
        <header className="container mx-auto flex items-center justify-between py-5 px-5 lg:px-10 xl:px-20">
            <img className='h-8 md:h-auto' src={ isLight ? LightLogoIcon : DarkLogoIcon} />
            <div className="flex flex-row items-center">
                <button onClick={toggleTheme} className={`${isLight ? "bg-[rgb(242,242,247)]" : "bg-[rgb(42,43,55)]"}  flex items-center justify-center h-10 w-10 rounded cursor-pointer`}>
                    <img src={isLight ? moonIcon :sunIcon } />
                </button>
            </div>
        </header>
    )
}
