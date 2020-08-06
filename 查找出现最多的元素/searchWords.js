let article = "  like a my like he me me a a me  aa ";
let newArticle = article.trim();
let match = newArticle.match(/[a-zA-Z]+/ig);
let wordLength, word, max = 0, maxWord = [];
for (let i = 0; i < match.length; i++) {
  word = new RegExp("" + match[i] + "", 'g');
  wordLength = article.match(word).length;
  if (wordLength == max) {
    max = wordLength;
    maxWord.push(match[i]);
  } else if (wordLength > max) {
    max = wordLength;
    maxWord = [];
    maxWord[0] = match[i];
  }
}
maxWord = [...new Set([...maxWord])];
console.log(`出现次数最多的单词是：${maxWord},次数为：${max}`);

