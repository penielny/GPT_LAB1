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




export {
    countCharacter,
    countWord,
    countSentence
}