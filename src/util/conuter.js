function countCharacter(text, excludeSpace) {
    let counter = 0;
    text.split("").forEach(element => {
        if (excludeSpace && element === " ") return; 
        counter += 1;
    });
    return counter;
}


function countWord(text) {
    if (text.trim() === "") return 0; 
    return text.trim().split(/\s+/).length;
}


function countSentence(text) {
    if (text.trim() === "") return 0; 
    return text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length;
}


function readingTime(text) {
    // 0.3 seconds per word
    let timeAsMin =  ((parseFloat(countWord(text)) * 0.3) / 60).toFixed(2)


    if (timeAsMin < 1.0 ){
        return '< 1'
    }

     return timeAsMin
}

function letterDensity(text, char) {
    if (!text || !char) return 0;
  
    const normalizedText = text.toLowerCase();
    const targetChar = char.toLowerCase();
    const totalLength = normalizedText.length;
  
    // Count how many times the char appears
    let count = 0;
    for (let i = 0; i < totalLength; i++) {
      if (normalizedText[i] === targetChar) count++;
    }
  
    // Calculate percentage
    const percentage = (count / totalLength) * 100;
  
    return {total: count, percentage:Number(percentage.toFixed(2))}; 
  }
  


export {
    countCharacter,
    countWord,
    countSentence,
    letterDensity,
    readingTime
}