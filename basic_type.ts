// 알아두어야 할 것!!
// 타입을 아래와 같이 일일이 안써주어도 커서를 가져다 놓았을 때 ts가 맞게 추론하면, 귀찮으니까 굳이 아래처럼 일일히 type을 안써져도 됀다!!

// 😎 기본타입
// 타입명 소문자만 가능!!
const a: number = 5;
const b: string = 'CoderDuck';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

// const 변수는 명시적으로 표현하는게 좋음
const bad_ex: boolean = true;
const good_ex: true = true; // 위에보다 명확!

// 함수
// 1. 일반, 화살표함수
function func(x: number, y: number): number {
    return x + y;
}
const arrowfunc: (x: number, y: number) => number = (x, y) => x + y;

// 2. 타입선언해서 선언
type arrowfunctype = (x: number, y: number) => number;
const arrow2func: arrowfunctype = (x, y) => x + y;

// 3. interface로 선언
interface arrowfuncinterface {
    (x: number, y: number): number;
}
const arrow3func: arrowfuncinterface = (x, y) => x + y;

// 4. ...으로 나눠서 받기
rest(1, 'a', 'b');
function rest(a: number, ...args: string[]) {
    console.log(a, args);
}

// 객체
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// 배열
const arr: string[] = ['a', 'b', 'c'];
const arr2: Array<string> = ['a', 'b', 'c'];
const arr3: [number, number, string] = [1, 2, 'a'];
