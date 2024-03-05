class heroInfo {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  checkTipo() {
    let tipoAtaque

    if (this.tipo === "Mago") {
      tipoAtaque = "magia"
    } else if (this.tipo === "Guerreiro") {
      tipoAtaque = "espada"
    } else if (this.tipo === "Monge") {
      tipoAtaque = "artes marciais"
    } else if (this.tipo === "Ninja") {
      tipoAtaque = "shuriken"
    } else if (this.tipo === "Aprendiz") {
      tipoAtaque = "soco"
    }

    return tipoAtaque
  }

  atacar() {
    console.log(`${this.tipo} ${this.nome} de ${this.idade} anos atacou com ${this.checkTipo()}`)
  }
}


let mago = new heroInfo("Baltazar Empiriarts", 2872, "Mago")
let guerreiro = new heroInfo("Spartacus", 42, "Guerreiro")
let monge = new heroInfo("Killian", 40, "Monge")
let ninja = new heroInfo("Kallicus", 43, "Ninja")
let aprendiz = new heroInfo("Garotinho do Jogo", 16, "Aprendiz")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
aprendiz.atacar()