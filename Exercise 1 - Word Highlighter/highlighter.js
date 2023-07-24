function textCount(text) {
    let text = text.split(/\s+/);
    let  textCount = {};
  
    text.forEach(word => {
      const newText = word.replace(/[.,!?]/g, ''); 
      textCount[newText] = (textCount[newText] || 0) + 1;
    });
  
    return textCount;
  }
  function mostFreWord(textCount) {
    const  textSorted= Object.keys(textCount).sort((a, b) => textCount[b] - textCount[a]);
    return textSorted.slice(0, 5);
  }
  