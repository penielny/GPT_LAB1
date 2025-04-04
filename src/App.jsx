import Header from './component/Header'
import { useTheme } from './context/themeContext'
import CountCard from './component/CountCard'

import characterFlyer from './assets/images/pattern-character-count.svg'
import wordFlyer from './assets/images/pattern-word-count.svg'
import sentenceFlyer from './assets/images/pattern-sentence-count.svg'
import { useState } from 'react'
import { countCharacter, countSentence, countWord } from './util/conuter'
import CustomCheckbox from './component/Checkbox'

function App() {
  const { isLight } = useTheme()

  const [appState, setAppState] = useState({
    text: "",
    charLimit: 0,
    charLimitToggle: false,
    excludeSpaces: false,
  })
  

  return (
    <main className={`h-screen flex flex-col space-y-5 w-full ${isLight ? "light_bg" : "dark_bg"} overflow-y-auto`}>
      <Header />
      <div className="container mx-auto flex flex-col space-y-10 justify-center items-center">
        <h3 className={`${isLight ? "text-black" : "text-[rgb(242,242,247)]"} text-center w-full text-5xl md:w-2/4 md:text-7xl scale-75 font-bold`}>Analyze your text in real-time.</h3>

        <div className="w-full flex flex-col space-y-3 px-5 md:px-0">
          <div className={`${isLight ? "bg-[rgb(242,242,247)] border-[rgb(228,228,239)] placeholder:text-[rgb(42,43,55)] text-[rgb(42,43,55)]" : "bg-[rgb(42,43,55)] border-[rgb(25,25,33)] placeholder:text-[rgb(228,228,239)] text-[rgb(228,228,239)]"} border-2 w-full h-full rounded-lg overflow-hidden`}>
            <textarea value={appState.text} placeholder="Start typing here… (or paste your text)" onChange={e => appState({ ...appState, text: e.target.value })} className={"flex w-full resize-none outline-none h-[20vh] p-5 cursor-pointer text-[20px]"}>

            </textarea>
          </div>

          <div className="flex md:items-center flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-5">
              <div className="flex flex-row items-center space-x-1">
                <CustomCheckbox isLight={isLight} onChange={(data) => setAppState({ ...appState, excludeSpaces: data })} checked={appState.excludeSpaces} label={"Exclude Spaces"} />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <CustomCheckbox isLight={isLight} onChange={(data) => setAppState({ ...appState, charLimitToggle: data })} checked={appState.charLimitToggle} label={"Set Character Limit"} />
                {appState.charLimitToggle && <input type='number' className='w-20 border rounded-lg' />}
              </div>
            </div>
            <p className={isLight ? "text-[rgb(18,19,26)]" : "text-[rgb(228,228,239)]"}>Approx. reading time: &lt; 1 minute </p>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-5 md:space-y-0  md:flex-row  items-center md:space-x-5 px-5 md:px-0">
          <CountCard color="characters_count_bg" total={countCharacter(appState.text, appState.excludeSpaces)} label="Total Characters" image={characterFlyer} />
          <CountCard color="word_count_bg" total={countWord(appState.text)} label="Word count" image={wordFlyer} />
          <CountCard color="sentence_count_bg" total={countSentence(appState.text)} label="Sentence count" image={sentenceFlyer} />
        </div>


        <div className="w-full flex flex-col space-y-5 px-5 md:px-0">
          <h5 className={`${isLight ? "text-black" : "text-white"} font-bold`}>Letter Density</h5>
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
        </div>
      </div>
    </main>
  )
}

export default App
