// Condição Aninhada

//pega a data atual do sistema
var agora = new Date()
//pega a data atual e transforma em string (Hora:minuto:segundo)
var hora = agora.getHours()+":"+agora.getMinutes()+":"+agora.getSeconds()
//Exibe na tela qual a hora atual
console.log(`Agora são exatamente ${hora} horas.`)

// condição aninhada para saudar a pessoa de acordo com o horário do dia.
if(hora < '12:00:00') {
    console.log('Bom dia!')
} else if(hora <= '18:00:00') {
    console.log('Boa Tarde!')
} else if(hora <= '24:00:00') {
    console.log('Boa Noite!')
} else {
    console.log('Vai dormir é madrugada!')
}