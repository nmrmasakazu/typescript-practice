// JSファイルを推論
import { sampleText, sampleFunction } from "./sample"

/////////////// 第5章 ////////////////////
interface User7 {
    name: string
}
interface User7 {
    age: number
}

/////////////// 第4章 ////////////////////
function getFormattedValue(value: number | null) {
    if (value === null) return "-- pt"
    return `${value.toFixed(1)} pt`
}

function greet(name?: string, unit = "san") {
    if (name === undefined) return "Hello"
    return `Hello ${name} ${unit}`
}
console.log(greet())
console.log(greet("nmrmasakazu"))

type User = {
    age?: number,
    name?: string
    gender: string
}

function registerUser(user: User) {

}

const maybeUser = {
    age: 26,
    // name: "nmrmasakazu",
    gender: "male"
}
registerUser(maybeUser)

const defaultTheme = {
    backgroundColor: "orange" as "orange",
    borderColor: "red"
}
defaultTheme.backgroundColor = "orange"

// インデックスシグネチャによる動的プロパティ追加の許容
type User2 = {
    name: string,
    [k: string]: number | string
}
const user2: User2 = {
    name: "nmrmasakazu",
    age: 26
}
console.log(user2)

type Question = "exercise_habbits"
type Answer = "mighty" | "lot"
type User3 = {
    name: string,
    enquete: {
        [k in Question]?: Answer
    }
}
const user3: User3 = {
    name: "Taro",
    enquete: {
        exercise_habbits: "mighty"
    }
}
const y = user3.enquete.exercise_habbits

// 関数プロパティのみ
interface Functions {
    [k: string]: Function
}

function reset(value: number | string) {
    const v0 = value
    if (typeof value === "number") {
        const v1 = value
    }
}

type User4 = {
    gender: string
}
type User5 = User4 & {
    name: string
}
type User6 = User4 & {
    graduate: string
}

function judgeUserType(user: User5 | User6) {
    if ("name" in user) {
        const u = user
    }
}

/////////////// 第3章 ////////////////////
const array1 = [true, false]
const array2 = [0, 1, "2"]

const tuple1 = [false, 1] as [boolean, number]

let list2 = ["this", "is", "a", "test"]
list2.push("1")
console.log(list2)

list2 = list2.map(item => item.toUpperCase())
console.log(list2)

let list3 = list2.reduce((prev, current) => `${prev} ${current}`)
console.log(list3)

const obj = {
    foo: false,
    bar: 1
}

let com = {
    nmrmasakazu: {
        familyname: "hogehoge"
    }
}
console.log(com.nmrmasakazu.familyname)

function wait(duration: number): Promise<String> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
}

wait(100).then(t => console.log(t))

async function queue() {
    const message = await wait(1000)
    return message
}

queue().then(t => console.log(top))

/////////////// 第2章 ////////////////////
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

let asString: string = "test"
let valueString: typeof asString
valueString = "test2"

type myObject = {
    foo: "FOO",
    bar: "BAR"
}
let myObjectKey: keyof myObject

let someValue: any = "this is a string"
let strLength = (someValue as string).length

class Creature {
    numberOfHands: number
    numberOfFeet: number

    constructor(numberOfHands: number, numberOfFeet: number) {
        this.numberOfHands = numberOfHands
        this.numberOfFeet = numberOfFeet
    }
}

const creature = new Creature(0, 4)

class Dog2 extends Creature {
    private bark: string
    constructor(bark: string) {
        super(0, 4)
        this.bark = bark
    }
}

enum Direction {
    Up,
    Down,
    Left, 
    Right
}
const left = Direction.Left

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