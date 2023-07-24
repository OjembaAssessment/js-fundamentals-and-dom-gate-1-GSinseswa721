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
  function highstatement(paragraph, topWords) {
    const words = paragraph.split(/\s+/);
  
    const highlighteStatment = words.map(word => {
      const cleanedWord = word.replace(/[.,!?]/g, '');
      if (topWords.includes(cleanedWord)) {
        if (word.charAt(0) === word.charAt(0).toUpperCase()) {
          return `<span class="highlight underline">${word}</span>`;
        } else {
          return `<span class="highlight">${word}</span>`;
        }
      } else {
        return word;
      }
    }).join(' ');
  
    return highlighteStatment;
  }
  