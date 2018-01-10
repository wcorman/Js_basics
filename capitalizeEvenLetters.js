const args = process.argv.slice(2);

let word = args[0];

word = word.toUpperCase().split('');
let count = 0

for (let i = 0; i < word.length; i++)
  if (word[i] != ' ' && word [i] != ',' && word[i] != '.') {
    count +=1;
    if (count % 2 != 0) {
      word[i] = word[i].toLowerCase();
    }
 }

word = word.join('');
console.log(word);
