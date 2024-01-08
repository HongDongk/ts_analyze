// 타입이 둘중에 하나일때 typeof 사용
function numOrStr(a: number | string) {
    if (typeof a === 'string') {
        a.split(',');
    } else {
        a.toFixed(1);
    }
}

// 타입이 배열일 경우 Array.isArray(a) 사용
function numOrNumArr(a: number | number[]) {
    if (Array.isArray(a)) {
        a.slice(1);
    } else {
        a.toFixed(1);
    }
}

// 타입이 객체일경우 객체속성 사용
type Curry = { type: 'basketball'; bbb: string };
type Messi = { type: 'soccer'; ccc: string };
type Player = Curry | Messi;
function typeCheck(a: Player) {
    if (a.type === 'basketball') {
        a.bbb;
    } else if (a.type === 'soccer') {
        a.ccc;
    }
}

// 커스텀 타입 => 사용자가 직접 타입검사를 만들어 검사할 수 있다! (is)
interface Cat {
    meow: number;
}
interface Dog {
    bow: number;
}
// 1. 커스텀타입 생성
function catOrDog(a: Cat | Dog): a is Dog {
    if ((a as Cat).meow) {
        return false;
    }
    return true;
}
const cat: Cat | Dog = { meow: 3 };
// 2. 커스텀타입으로 검사
if (catOrDog(cat)) {
    console.log(cat.meow);
}
// 3. 일반검사
if ('meow' in cat) {
    console.log(cat.meow);
}
