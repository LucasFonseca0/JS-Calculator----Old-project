var lista = [null,null,null]

const Mais = () =>{
    if(visor.innerHTML!='|'){const atual =Number(visor.innerHTML)
    if(lista[0] == null){
        lista[0]= atual
        visor.innerHTML= '+'
        lista[2] = 'mais'
    }
    else if (visor.innerHTML == '+'){
        
    }
    else if (lista[0] != null && lista[1] == null){
        Igual()
    }}
}
const Menos = () =>{if(visor.innerHTML!='|'){const atual =Number(visor.innerHTML)
    if(lista[0] == null){
        lista[0]= atual
        visor.innerHTML= '-'
        lista[2] = 'menos'
    }
    else if (visor.innerHTML == '+' || visor.innerHTML == '-' || visor.innerHTML == '÷' || visor.innerHTML == 'x'  ){
        
    }
    else if (lista[0] != null && lista[1] == null){
        Igual()
    }}}
const Divi = () =>{if(visor.innerHTML!='|'){const atual =Number(visor.innerHTML)
    if(lista[0] == null){
        lista[0]= atual
        visor.innerHTML= '÷'
        lista[2] = 'divi'
    }
    else if (visor.innerHTML == '+' || visor.innerHTML == '-' || visor.innerHTML == '÷' || visor.innerHTML == 'x'  ){
        
    }
    else if (lista[0] != null && lista[1] == null){
        Igual()
    }}}
const Mult = () =>{if(visor.innerHTML!='|'){const atual =Number(visor.innerHTML)
    if(lista[0] == null){
        lista[0]= atual
        visor.innerHTML= 'x'
        lista[2] = 'mult'
    }
    else if (visor.innerHTML == '+' || visor.innerHTML == '-' || visor.innerHTML == '÷' || visor.innerHTML == 'x'  ){
        
    }
    else if (lista[0] != null && lista[1] == null){
        Igual()
    }}}

const Igual = () => {
    if(visor.innerHTML!='|'){const atual =Number(visor.innerHTML)
    if (lista[0] != null ){
        if (lista[2] == 'mais'){
            lista[1] = atual
            const soma = Number(lista[0])+Number(lista[1])
            visor.innerHTML = soma}
        else if (lista[2] == 'menos'){
            lista[1] = atual
            const soma = Number(lista[0])-Number(lista[1])
            visor.innerHTML = soma}
        else if (lista[2] == 'divi'){
            lista[1] = atual
            const soma = Number(lista[0])/Number(lista[1])
            visor.innerHTML = soma}
        else if (lista[2] == 'mult'){
            lista[1] = atual
            const soma = Number(lista[0])*Number(lista[1])
            visor.innerHTML = soma}
        lista[0] = null
        lista[1] = null
        lista[2] = null
    }}
}

const AC = () => {
    visor.classList.add('piscar')
    visor.innerHTML ='|'
    b=0
}
export {Mais,Menos,Divi,Mult,AC,Igual};