//Mission 01 : var, let, const를 이용해 변수를 선언하고 각각의 차이점을 조사해보세요


// 01-1 : var, let, const의 재선언, 재할당, 초기값 설정 비교

var myName;  //var과 let은 초기값을 선언하지 않아도 ok
var myName = 'bora Kim';
var myName = 'Bora';  // var은 변수 재선언 가능
console.log(myName);
myName = 'Tania';
console.log(myName);

let dogName = 'Choco';
//let dogName = 'Jeolmi';  > let 재선언 불가
console.log(dogName);
dogName = 'Molly';
console.log(dogName);

//const friendName;  > SyntaxError : const는 var, let과 다르게 반드시 초기값 설정해주어야 함
const friendName = 'Hyojin Kim';
//const friendName = 'Hyojin Kim';  > const 재선언 불가
console.log(friendName);
//friendName = 'Sunyoung Lee';  > TypeError : const는 단어 그대로 constant라 var이나 let과 다르게 값을 다시 할당(reassign) 할 수 없기 때문이다.
console.log(friendName);


// 01-2 : var, let, const의 선언되기 전 사용 비교

console.log(varTest);  // 선언 되기 전에 사용해도 값이 undefined로 초기화되어 호이스팅 됨
var varTest = 1;
console.log(varTest);

//console.log(letTest);  > ReferenceError : 호이스팅은 되지만, 선언되기 전에 초기화값이 없으면 사용 불가
let letTest = 2;  
console.log(letTest);

//console.log(constTest);  > ReferenceError : 호이스팅은 되지만, 선언되기 전에 초기화값이 없으면 사용 불가
const constTest = 3;
console.log(constTest);


// 01-3 : var, let, const의 function scope와 block scope

function varScopeTest() {
    for (var i = 0; i < 3; i++) {
      console.log(i + ' block');
    }
    console.log(i);  // for문 블록 밖인데도 var은 함수 스코프이기 때문에 위의 값을 받아와 10이 출력됨
  } 
varScopeTest();

function letScopeTest() {
    for (let z = 0; z < 3; z++) {
      console.log(z + ' block');
    }
   // console.log(z);  > ReferenceError: z is not defined 
   // var과 다르게 for문에 선언된 let 변수는 블록 스코프라서 for문의 블록({})을 벗어나면 사용이 불가해 에러가 뜸, const도 마찬가지
  } 
letScopeTest();


/* <정리>

var : 재선언 가능, 재할당 가능, 선언 전에 사용해서 호이스팅 될 때 값이 undefined로 알아서 초기화됨, 블록을 벗어나도 함수 내에서 사용 가능한 function level scope
let : 재선언 불가, 재할당 가능, 호이스팅은 되지만 초기화 값이 필요해서 선언 전에 사용 불가, 해당 블록 내에서만 사용 가능한 block level scope
const : 재선언 불가, 재할당 불가, 호이스팅은 되지만 초기화 값이 필요해서 선언 전에 사용 불가, 해당 블록 내에서만 사용 가능한 block level scope

var보다는 재할당을 할 것인지 안 할 것인지 여부에 따라 let과 const를 사용하여 변수 선언을 하는 것이 좋다! */




