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

// 😎 객체
// 1. 타입 직접지정
const obj: { lat: number; lon: number } = {
    lat: 37.5,
    lon: 127.5,
};

// 2. 간단 타입지정
const obj2 = {
    lat: 37.5,
    lon: 127.5,
} as const;

// 3. key값 타입 가져오기
type Key = keyof typeof obj2;

// 4. value값 타입 가져오기
type Value = (typeof obj2)[keyof typeof obj2];

// 😎 배열
const arr: string[] = ['a', 'b', 'c'];
const arr2: Array<string> = ['a', 'b', 'c'];
const arr3: [number, number, string] = [1, 2, 'a'];

// 😎 모든타입(null과 undefined 제외) - {}, Object
const xx: {} = [1, 2, 3, 4, 5];
const yy: Object = 'hello';

// 😎 ERROR 타입
try {
} catch (error) {
    error as Error;
}
