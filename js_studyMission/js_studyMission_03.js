//Mission 03 : for문과 while문을 반복문을 작성해보세요

//03-1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for문과 배열 - for문이 배열 안에서 loop 된다.
const food = ['피자', '치킨', '햄버거', '떡볶이'];
for (let i = 0; i < food.length; i++){
    console.log(food[i]);
  }

  //nested loop
const array1 = [30, 12, 9, 83];
const array2 = [19, 83, 2, 30, 46];
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      console.log('Both loops have the number: ' + array2[j]);
    }
  }
};

//03-2. while loop - for문과 유사하지만 얼마나 루프가 될지 모를 때 사용하면 좋음

for (let forTest = 1; forTest < 4; forTest++){
    console.log(forTest);
  }
  
  let whileTest = 1;
  while (whileTest < 4) {  //while 옆의 조건이 거짓이 될때까지 아래 블록이 반복되며 실행됨
    console.log(whileTest);
    whileTest++;
  } 

//03-3. Do...while 반복문 : while문과는 다르게 do…while은 조건이 참인지 여부에 관계없이 최소 한 번 이상 실행됨 (조건이 do 구문보다 아래에 있으므로)
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
do {
    console.log(firstMessage)
   } while (true === false);