import {Mais0,Mais1,Mais2,Mais3,Mais4,Mais5,Mais6,Mais7,Mais8,Mais9,Atual} from './numeros.js'
import { Mais,Menos,Mult,Divi, AC, Igual } from './operacoes.js'


const visor = document.querySelector('#visor')




const n1 = document.querySelector('#num1')
const n2 = document.querySelector('#num2')
const n3 = document.querySelector('#num3')
const n4 = document.querySelector('#num4')
const n5 = document.querySelector('#num5')
const n6 = document.querySelector('#num6')
const n7 = document.querySelector('#num7')
const n8 = document.querySelector('#num8')
const n9 = document.querySelector('#num9')
const n0 = document.querySelector('#num0')

const somar  = document.querySelector('#mais')
const subtrair = document.querySelector('#menos')
const dividir = document.querySelector('#dividir')
const multiplicar = document.querySelector('#vezes')
const igual = document.querySelector('#igual')
const ac = document.querySelector('#ac')



visor.classList.add('piscar')



n0.addEventListener('click',Mais0)
n1.addEventListener('click',Mais1)
n2.addEventListener('click',Mais2)
n3.addEventListener('click',Mais3)
n4.addEventListener('click',Mais4)
n5.addEventListener('click',Mais5)
n6.addEventListener('click',Mais6)
n7.addEventListener('click',Mais7)
n8.addEventListener('click',Mais8)
n9.addEventListener('click',Mais9)

somar.addEventListener('click',Mais)
somar.addEventListener('click',Atual)
subtrair.addEventListener('click',Menos)
subtrair.addEventListener('click',Atual)
dividir.addEventListener('click',Divi)
dividir.addEventListener('click',Atual)
multiplicar.addEventListener('click',Mult)
multiplicar.addEventListener('click',Atual)
igual.addEventListener('click',Igual)
igual.addEventListener('click',Atual)
ac.addEventListener('click',AC)
ac.addEventListener('click',Atual)




