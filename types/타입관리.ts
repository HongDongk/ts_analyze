// 😎 | 와 &

type A = {
    a: string;
};
type B = {
    b: string;
};

// 1. | (OR) => 둘중에 하나만 만족하면됌
const aa: A | B = { a: 'hello' };

// 2. & (and) => 둘 다 만족해야됌
const bb: A & B = { a: 'hello', b: 'world' };

// 3. 객체 속성을 바로 추가하고 선언하면 오류남(잉여속성검사)
const cc: A & B = { a: 'hello', b: 'world', c: 'whynot?' }; // 오류
const dd: A | B = { a: 'hello', b: 'world', c: 'whynot?' }; // 오류

// 올바른 예
const temp = { a: 'hello', b: 'world', c: 'whynot?' };
const ee: A & B = temp;
