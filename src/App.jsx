import { useEffect, useMemo, useState } from 'react'
import { useTheme } from './context/themeContext'
import { countCharacter, countSentence, countWord } from './util/conuter'
import Header from './component/Header'
import CountCard from './component/CountCard'
import CustomCheckbox from './component/Checkbox'
import LetterDensity from './component/LetterDensity'

import characterFlyer from './assets/images/pattern-character-count.svg'
import wordFlyer from './assets/images/pattern-word-count.svg'
import sentenceFlyer from './assets/images/pattern-sentence-count.svg'
import infoIcon from './assets/images/icon-info.svg'

function App() {
  const { isLight } = useTheme()

  const [appState, setAppState] = useState({
    text: "",
    charLimit: 0,
    charLimitToggle: false,
    excludeSpaces: false,
  })

  const [inputFocus, setInputFocus] = useState(false);
  const [charLimitError, setCharLimitError] = useState(false);


  const getBorderClass = () => {
    if (inputFocus && !charLimitError) return "normal_ring";
    if (charLimitError) return "limit_ring";
    return isLight
      ? "border-[rgb(228,228,239)]"
      : "border-[rgb(25,25,33)]";
  };

  return (
    <main className={`h-screen flex flex-col space-y-5 w-full ${isLight ? "light_bg" : "dark_bg"} overflow-y-auto`}>
      <Header />
      <div className="container mx-auto flex flex-col space-y-10 justify-center items-center">
        <h3 className={`${isLight ? "text-black" : "text-[rgb(242,242,247)]"} text-center w-full text-5xl md:w-2/4 md:text-7xl scale-75 font-bold`}>Analyze your text in real-time.</h3>

        <div className="w-full flex flex-col space-y-3 px-5 md:px-0">
          <div className='flex flex-col space-y-2'>
            <div className={`${getBorderClass()} ${isLight ? "bg-[rgb(242,242,247)] placeholder:text-[rgb(42,43,55)] text-[rgb(42,43,55)]" : "bg-[rgb(42,43,55)]  placeholder:text-[rgb(228,228,239)] text-[rgb(228,228,239)]"} border-2 w-full h-full rounded-lg overflow-hidden`}>
              <textarea onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} value={appState.text} placeholder="Start typing here… (or paste your text)" onChange={e => {

                const inputText = e.target.value;
                const charCount = inputText.length;

                if (appState.charLimitToggle && charCount > appState.charLimit && inputText.length > appState.text.length) {
                  setCharLimitError(true);
                  return;
                }

                setCharLimitError(false);
                setAppState({ ...appState, text: inputText });
              }
              } className={"flex w-full resize-none outline-none h-[20vh] p-5 cursor-pointer text-[20px]"}>

              </textarea>
            </div>
            {charLimitError && <div className='flex flex-row items-center space-x-3 pb-1'>
              <img src={infoIcon} />
              <p className={`text-[rgb(254,129,89)]`}>Limit reached! Your text exceeds {appState.charLimit} characters.</p>
            </div>}
          </div>

          <div className="flex md:items-center flex-col space-y-3 md:space-y-0 md:flex-row justify-between w-full">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-5">
              <div className="flex flex-row items-center space-x-1">
                <CustomCheckbox onChange={(data) => setAppState({ ...appState, excludeSpaces: data })} checked={appState.excludeSpaces} label={"Exclude Spaces"} />
              </div>
              <div className="flex flex-row items-center space-x-5">
                <CustomCheckbox onChange={(data) => setAppState({ ...appState, charLimitToggle: data })} checked={appState.charLimitToggle} label={"Set Character Limit"} />
                {appState.charLimitToggle && <input value={appState.charLimit} onChange={e => setAppState({ ...appState, charLimit: e.target.valueAsNumber })} type='number' className={`border-[rgb(64,66,84)] ${isLight ? "text-[rgb(18,19,26)]" : "text-white"} w-16 border rounded-lg px-1 outline-none`} />}
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

        <LetterDensity text={appState.text} />

      </div>
    </main>
  )
}

export default App
