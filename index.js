//definindo entidade aviao e seus comportamentos

class Veiculo {
   veiculosQueVoam = ["aviao", "asadelta","helicoptero"]
    constructor(tipo, combustivel){
        this.tipo = tipo
        this.combustivel = combustivel
        this.cor = "sem cor"
    }

    get podeVoar() {
        return this.veiculosQueVoam.includes(this.tipo)
    }

    set Cor(cor){
        this.cor = cor
    }
    
}

class Carro extends Veiculo {
    constructor(combustivel){
       super("carro", combustivel)
    }
}

class Aviao extends Veiculo {
    //modelo, combustivel, motores
    constructor(modelo, combustivel, motores){
        super("aviao", combustivel)
        this.modelo = modelo
        this.motores = motores
    }
}

var carro = new Carro(10)
console.log(carro.tipo)
console.log(carro.combustivel)
console.log(carro.podeVoar)
console.log(carro.cor)
console.log("----")
//modelo, combustivel, motores
var aviao = new Aviao("tico teco", 1, 2)
console.log(aviao.tipo)
console.log(aviao.combustivel)
console.log(aviao.podeVoar)
aviao.Cor = "Amarelo"
console.log(aviao.cor)
//crio uma lista de avioes

// var meusAvioes = [
//     new Aviao("Airbong", 20, 2), 
//     new Aviao("Tico teco", 0, 2), 
//     new Aviao("Cesna", 15, 2)
// ]

// // vou interagir com essa lista de avioes
// for(var i =0; i < meusAvioes.length; i++){
//     var aviao = meusAvioes[i]
//     aviao.iniciarVoo()
//     console.log("modelo",aviao.modelo, "pode voar",aviao.podeVoar)
// }

// // opção diferente para listar os aviões
// for(var item in meusAvioes){
//     var aviao = meusAvioes[item]
//     aviao.iniciarVoo()
//     console.log("modelo", aviao.modelo, "pode voar",aviao.podeVoar)
// }
