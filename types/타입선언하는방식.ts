// 😎 타입 선언하는 방법

// 1. 기본 선언
const arrow4func: (x: number, y: number) => number = (x, y) => x + y;

// 2. 타입선언해서 선언
type arrowfunctype = (x: number, y: number) => number;
const arrow2func: arrowfunctype = (x, y) => x + y;

// 3. interface로 선언
interface arrowfuncinterface {
    (x: number, y: number): number;
}
const arrow3func: arrowfuncinterface = (x, y) => x + y;

// interface의 상속, readonly, ?
interface Animal {
    breath: true;
    readonly earth: true; // eart 속성을 추후에 변경 불가!
    brain?: true; // brain 속성 있어도 되고 없어도 됌
}
interface Human extends Animal {
    think: true;
}
const human: Human = { breath: true, earth: true, think: true };
