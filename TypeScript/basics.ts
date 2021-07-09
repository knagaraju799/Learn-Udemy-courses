function add(n1: number, n2: number, printResult : boolean, resultPhrase: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(resultPhrase + result)
  } else {
    return n1 + n2
  }
}

let number1 : number;
number1 = 1;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is here : "

const result = add(number1, number2, printResult, resultPhrase)
console.log(result)