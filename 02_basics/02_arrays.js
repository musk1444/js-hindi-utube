const marvelheroes = ["thor", "spiderman", "captain america"]
const dcheroes = ["batman","flash", "superman"]

// marvelheroes.push(dcheroes)
// console.log(marvelheroes);

const newarr = marvelheroes.concat(dcheroes)
// console.log(newarr);

const newarr2 = [...marvelheroes, ...dcheroes]
// console.log(newarr2);

const anotherarray = [1,2,3,5,6,[3,7,9,[98,23],8],10,12]
const realanotherarray = anotherarray.flat(Infinity)
// console.log(realanotherarray);

// console.log(Array.isArray("muskan"));
// console.log(Array.from("muskan"));
// console.log(Array.from({name : "mukkuuu"})); // this is very interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



