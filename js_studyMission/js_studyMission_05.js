//Mission 05 : array method 중 slice, splice, push, pop, filter, map 을 활용한 함수를 작성해보세요

//array 배열의 기본 구조
let colorArray = ['blue', 'red', 'black', 'purple', 'white'];
console.log(colorArray[3]);  //배열 요소는 차례대로 0번부터 넘버링이 되어 해당 넘버의 배열 요소가 호출됨

// .length : 배열의 길이를 반환
const arrayLengthTest = [1, 2, 3, 4, 5, 6];
console.log(arrayLengthTest.length); //해당 array의 길이 출력 


// .slice() : 배열의 일부분을 선택해 새로운 배열을 만들어줌 - 기본 형태 : array.slice(start, end)
var sliceTest = [1, 2, 3, 4, 5, 6, 7];
var sliceTest2 = sliceTest.slice(3, 6);
console.log(sliceTest2);  // sliceTest 배열의 3번째와 6번째까지의 요소를 새로운 배열으로 반환 / 원본 배열 변화 X


// .splice() : 원하는 위치에 요소를 추가하거나 삭제할 수 있음 - 기본 형태 : array.splice(start, deleteCount(삭제하지 않을 경우 0), el(추가할 요소))
var spliceTest = [1, 2, 3, 4, 5, 6, 7];
var spliceTest2 = spliceTest.splice(3, 3);  // 3번째 요소로부터 3개의 요소(4, 5, 6)을 삭제해라
console.log(spliceTest);  // 원본 배열이 변화함
console.log(sliceTest2);  // 삭제된 요소의 배열이 이곳에 담김

var spliceTestTwo = [1, 2, 3, 4, 5, 6, 7];
var spliceTestTwo2 = spliceTestTwo.splice(2, 3, '요소 추가 1', '요소 추가 2');  // 2번째 요소부터 3개를 삭제하고 '요소 추가 1', '요소 추가 2' 추가
console.log(spliceTestTwo);
console.log(spliceTestTwo2);


// .push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
var pushTest = ['가', '나', '다', '라'];
var pushtest2 = pushTest.push('마', '바', '사');
console.log(pushTest);  // 원본 배열에 push한 요소들이 추가됨
console.log(pushtest2);  // 변경된 배열 길이(요소의 갯수) 반환


// .pop() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
var popTest = ['가', '나', '다', '라', '마', '바', '사'];
var popTest2 = popTest.pop();  // 마지막 요소인 '사' 제거
console.log(popTest);


// .filter() : filter 조건에 맞는 배열 요소들을 새로운 배열로 반환
var filterTest = ['hello', 'my', 'name', 'is', 'boraKim'];
var filterTest2 = filterTest.filter(word => word.length >= 5);  // 5글자 이상인 요소만 
console.log(filterTest2);

var filterTest3 = filterTest.filter(word => word.length > 10);
console.log(filterTest3);  // 10글자 이상을 만족하는 요소가 없으므로 아무것도 없는 빈 배열 반환


// .map() : 배열 내의 모든 요소에 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환 (맵핑)
var mapTest = [1, 2, 3, 4, 5];
var mapTest2 = mapTest.map(x => x * 10);
console.log(mapTest2);  // 원본 배열에 각각 10을 곱한 새로운 배열 반환