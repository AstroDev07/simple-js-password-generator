let passGen=(charCant, includeUppercase, includeSpecials)=>{
    let chars="abcdefghijklmnopqrstuvwxyz"
    let specials="!@#$%&*?+=_-/][{}"

    let password=""

    for(let i=0; i<charCant; i++){
        let numCharOrSpe=0
        if(includeSpecials){
            numCharOrSpe=Math.round(Math.random()*3)
        }
        else{
            numCharOrSpe=Math.round(Math.random()*2)
        }
        if(numCharOrSpe==1){
            //Agregar un numero aleatorio a la clave
            password+=Math.round(Math.random()*10)-1
        }
        else if(numCharOrSpe==2){
            //Agregar una letra a la clave
            if(includeUppercase){
                if(Math.round(Math.random()*2)==1){
                    let randNum=Math.round(Math.random()*chars.length)
                    if(randNum==chars.length){
                        randNum-=1
                    }
                    password+=chars[randNum].toUpperCase()
                }
                else{
                    let randNum=Math.round(Math.random()*chars.length)
                    if(randNum==chars.length){
                        randNum-=1
                    }
                    password+=chars[randNum]
                }
            }
            else{
                let randNum=Math.round(Math.random()*chars.length)
                if(randNum==chars.length){
                    randNum-=1
                }
                password+=chars[randNum]
            }
        }
        else{
            //Agregar caracter especial
            if(includeSpecials){
                let randNum=Math.round(Math.random()*specials.length)
                if(randNum==specials.length){
                    randNum-=1
                }
                password+=specials[randNum]
            }
        }
    }
    if(password.length>charCant){
        return password.slice(0, charCant)
    }
    else{
        return password
    }
}

let key=passGen(22, true, true)
console.log(key)
console.log(key.length)