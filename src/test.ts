// JSファイルを推論
import { sampleText, sampleFunction } from "./sample"



function expo2(amount: number) {
    return amount ** 2
}
// console.log(expo2(1000))
function taxed(amount: number): number {
    return amount * 1.1
}
// console.log(taxed(100))

let list: number[] = [1, 2, 3]
// console.log(list)

let x: [string, number] = ["Hello", 365]
// console.log(x)

// Intersection Types
type Dog = {
    tail: string,
    bark: () => void
}

// Union Types
let value: boolean | number | string

/////////////// 第1章 ////////////////////
const a = sampleText;
const b = sampleFunction;

export function test1() {
    return "test1"
}

export function test2() {
    return { value: "test2" }
}


export function test() {
    return "test"
}

// 暗黙的なanyはNG
export function testAny(arg: any) {
    return arg
}

console.log("Hello, TypeScript!")