// 😎 함수

// 1. 일반, 화살표함수
function func(x: number, y: number): number {
    return x + y;
}
const arrowfunc: (x: number, y: number) => number = (x, y) => x + y;

// 2. ...으로 나눠서 받기
rest(1, 'a', 'b');
function rest(a: number, ...args: string[]) {
    console.log(a, args);
}

// 3. void 타입 => 함수인데 return값이 없는 함수!

function voidexx(): void {
    1 + 2;
}

const voidex = voidexx();
