let num = [5,8,2,9,3]
num.push(6) // adiciona um valor ao ultimo valor do vetor
num[5] = 1
num.sort(Number)

console.log(num.indexOf(10))
console.log(num)
console.log(`Nosso vetor tem o comprimento de ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//  percorrendo vetores
for($i=0;$i<num.length;$i++)
{
    console.log(`A posição ${$i} do vetor tem o valor de: ${num[$i]}`)
}

//  for in nova estrutura  de percorrer do ecmascript
for(let i in num) {
    console.log(`Posição ${i} tem o valor de: ${num[i]}`)
}