# ts_analyze

# 기본 지식
- typescript는 언어이자 컴파일러(tsc)이다. 컴파일러는 ts 코드를 js로 바꿔준다.
- npm i typescript => npx tsc --init
- tsc는 tsconfig.json에 따라 ts 코드를 js(tsc 시 생성)로 바꿔준다. 인풋인 ts와 아웃풋인 js 모두에 영향을 끼치므로 tsconfig.json 설정을 반드시 봐야한다.
- tsconfig.json 기본설정에서 esModuleInterop: true, strict: true 두 개 활성화되어있는지 확인
