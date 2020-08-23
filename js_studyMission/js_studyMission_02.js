//Mission 02 : template literal을 이용해 변수와 string을 동시에 작성해보세요

//template literal 형태 : 작은 따옴표('')나 큰 따옴표("") 가 아닌 백틱(``)으로 감싸줌
//입력 방법 : option키 + ₩키

//02-1 : 여러 줄의 스트링 한번에 작성 가능
console.log('템플릿 리터럴을 사용하지 않은 경우, \n' + '줄바꿈을 하려면 이렇게 나눠서 작성해야 한다.');  //일반
console.log(`템플릿 리터럴을 사용하면, 
이렇게 엔터키로 줄바꿈하면 콘솔에도 줄바꿈 되어 출력된다.`);  //템플릿 리터럴로 표현

//02-2 : expression interpolation (${})
const name = 'bora Kim';
const age = 24;
const like = '강아지';

console.log('안녕하세요. 제 이름은 ' + name + '입니다. 나이는 ' + age + '살이고, 좋아하는 것은 ' + like + '입니다.');
//일반
console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}살이고, 좋아하는 것은 ${like}입니다.`)
//템플릿 리터럴의 expression interpolation을 사용하면 보다 간단하게 표현할 수 있음


