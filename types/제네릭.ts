// 제네릭 <>

// T라는 타입이 string이어야한다
function add<T extends string | number>(x: T, y: T): T;
function add(x: any, y: any) {
    return x + y;
}
add(1, 2);
add('1', '2');

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol
