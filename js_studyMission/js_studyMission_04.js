//Mission 04 : if와 else를 이용해 조건문을 작성해보세요

//04-1. if 조건문 - 조검문이 true면 {} 안의 코드가 실행, false면 실행되지 않음
const number = 6;
if (number > 3) {
  console.log('This message will print!'); 
}

//04-2. if...else 조건문 - if 조건문이 true면 조건문 안의 실행, 아니면 else문의 블록 실행
const number2 = 9;
if (number < 5) {
    console.log(`${number2} is smaller than 5.`); 
}   else {
    console.log(`${number2} is same or bigger than 5.`);
}

//04-3. else if 조건문 : - If…else 조건문에서 else if 조건문을 사용하여 더 많은 조건을 추가할 수 있음
// Else if는 항상 if 후에, else 전에 위치한다. (If / else if / else 순)

let favoriteSeason = 'winter';

if (favoriteSeason === 'spring') {
    console.log('My favorite season is spring.');
} else if (favoriteSeason === 'summer') {
    console.log('My favorite season is summer.');
} else if (favoriteSeason === 'fall') {
    console.log('My favorite season is fall.');
} else if (favoriteSeason === 'winter') {
    console.log('My favorite season is winter.');
} else {
  console.log('undefined');
}

//04-4. switch : Else if의 조건이 너무 많아서 모두 다 쓰기 힘들때 switch를 사용하여 보다 편하게 입력할 수 있다.

let randomNumber = Math.floor(Math.random()* 7 );
let food = '';

function foodRandom() {
    switch (randomNumber) {
        case 0: 
            food = '떡볶이';
            break;
        case 1: 
            food = '피자';
            break;
        case 2: 
            food = '치킨';
            break;
        case 3: 
            food = '햄버거';
            break;
        case 4: 
            food = '찜닭';
            break;
        case 5: 
            food = '짜장면';
            break;
        case 6: 
            food = '족발';
            break;          
    } 
    console.log(`오늘 추천드리는 배달 음식은 ${food}입니다!`);
}

foodRandom();