class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220

  ) {}

  private alterarVelocidade(delta: number) {
    // Faco as validacoes de aceleracao e frenagem
    // this.velocidadeAtual = XXX
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();

// Heranca (uso da palavra extends e super, quando usamos essas palavras herda tudo que tem na outra classe)
class Camaro extends Carro {
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
      this.turbo = true;

    }
}

const camaro = new Camaro();
camaro.acelerar()
camaro.frear()
camaro.ligarTurbo()