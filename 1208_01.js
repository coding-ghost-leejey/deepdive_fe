const sentence = "Good morning, Hello Ghost";
const hasGhost = sentence.includes("ghost");

console.log(hasGhost);

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

const str = 3;

// '003'으로 출력하기 -> padStart()
console.log(String(str).padStart(3, "*"));

console.log(sentence.repeat(3));
