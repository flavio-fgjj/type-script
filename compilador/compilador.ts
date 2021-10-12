/* 
    To not create JS file when you got error on Ts. you should go to tsconfig.json e add the 'key/value' below:
    "noEmitOnError": true

    The key "target" is responsable to interact with javascript version

    To give access to the original TS file for dev, you should change the value of "sourceMap" key to true.

    -- You have a lot of key/value to help you with many things during the development.

    For more:
    https://www.typescriptlang.org/docs/handbook/tsconfig-json.html 
    https://www.typescriptlang.org/docs/handbook/compiler-options.html 

*/

let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = 'Pedro'

function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
    let saudacao: string
    if(isManha) {
        saudacao = 'Bom Dia!'
    } else {
        saudacao = 'Tenha uma boa vida!'
    }
    return saudacao
}