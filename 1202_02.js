const winners = ["Lee", "Park", "Kim", "Choi"];
// Kim 몇번째에 있는지 출력하시오.
// 우승자 Kim은 __ 번째 회원입니다.
let result = winners.indexOf("Kim");
console.log(`우승자 Kim은 ${result + 1}번째 회원입니다.`);

const tags = ["#JS", "#CSS", "#HTML"];
// tags 배열을 하나의 문자열로 합쳐주세요
// '#JS, #CSS, #HTML' 이렇게 출력되도록.
result = tags.join(", ");
console.log("2 : ", result);

const stock = ["banana", "orange", "apple", "grape"];
// 창고에 'apple'이 있는지 확인하여 true / false를 출력하세요
console.log(stock.includes("apple"));

const hashTags = "figma, illustrator, photoshop";
// 위의 hastTags 문자열을 배열로 변환하시오(단, 각 문자열 앞에 '#' 표시되도록)
// [ 'figma', 'illustrator', 'photoshop'] 먼저 출력.
// [ '#figma', '#illustrator', '#photoshop']
result = hashTags.split(", ").map((tag) => `#${tag}`);
console.log(result);
