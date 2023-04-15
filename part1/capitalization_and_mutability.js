function capitalizeWord(word) {
    word = word[0].toUpperCase() + word.slice(1,word.length);
    console.log(word);
  }

  capitalizeWord('word')