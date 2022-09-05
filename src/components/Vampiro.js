import { rand, shuffle } from "./Randomizer";

export class Vampiro {
  nome;
  jogador;
  cronica;
  natureza;
  comportamento;
  cla;
  geracao;
  senhor;
  conceito;

  atributos = {
    fisicos: {
      forca: 1,
      destreza: 1,
      vigor: 1,
    },
    sociais: {
      carisma: 1,
      manipulacao: 1,
      aparencia: 1,
    },
    mentais: {
      percepcao: 1,
      inteligencia: 1,
      raciocinio: 1,
    },
  };

  habilidades = {
    talentos: {
      prontidao: 0,
      esportes: 0,
      briga: 0,
      esquiva: 0,
      empatia: 0,
      expressao: 0,
      intimidacao: 0,
      lideranca: 0,
      manha: 0,
      labia: 0,
    },
    pericias: {
      empatiaComAnimais: 0,
      oficios: 0,
      conducao: 0,
      etiqueta: 0,
      armasDeFogo: 0,
      armasBrancas: 0,
      performance: 0,
      seguranca: 0,
      furtividade: 0,
      sobrevivencia: 0,
    },
    conhecimentos: {
      academicos: 0,
      computador: 0,
      financas: 0,
      investigacao: 0,
      direito: 0,
      linguistica: 0,
      medicina: 0,
      ocultismo: 0,
      politica: 0,
      ciencia: 0,
    },
  };

  vantagens = {
    antecedentes: [],
    disciplinas: [],
    virtudes: {
      conscienciaConviccao:0,
      autoControleInstinto:0,
      Coragem:0
    }
  };

  constructor(rec) {
    let obj = {
      nome: "Indigente",
      jogador: "Fulano de Tal",
      cronica: "Era uma vez",
  
      natureza: "",
      comportamento: "",
      cla: "Caitiff",
  
      geracao: 13,
      senhor: "Desconhecido",
      conceito: "Indiferente",
  
      atributos: [7, 5, 3],
      habilidades: [13, 9, 5],
      shuffle: false,
      ...rec,
    }

    this.nome = obj.nome;
    this.jogador = obj.jogador;
    this.cronica = obj.cronica;

    this.natureza = obj.natureza;
    this.comportamento = obj.comportamento;
    this.cla = obj.cla;

    this.geracao = obj.geracao;
    this.senhor = obj.senhor;
    this.conceito = obj.conceito;

    this.#gerarAtributos(obj.atributos);
    this.#gerarHabilidades(obj.habilidades);
  }

  #gerarAtributos(array, shuff) {
    let pontos = shuff ? shuffle(array) : array;
    let atributos = shuffle(Object.keys(this.atributos));

    atributos.forEach((atributo, i) => {
      let novoAtr = this.atributos[atributo];
      for (var atual = 0; atual < pontos[i]; atual++) {
        let alvo = Object.keys(novoAtr)[rand(0, 2)];
        if (this.cla === "Nosferatu" && alvo === "aparencia") {
          atual--;
          continue;
        }
        if (this.geracao === 13 && this.atributos[atributo][alvo] === 5) {
          atual--;
          continue;
        }
        this.atributos[atributo][alvo]++;
      }
    });

    if (this.cla === "Nosferatu") this.atributos.sociais.aparencia = 0;
  }

  #gerarHabilidades(array, shuff) {
    let pontos = shuff ? shuffle(array) : array;
    let habilidades = shuffle(Object.keys(this.habilidades));

    habilidades.forEach((habilidade, i) => {
      let novaHab = this.habilidades[habilidade];
      for (var atual = 0; atual < pontos[i]; atual++) {
        let alvo = Object.keys(novaHab)[rand(0, 9)];

        if (this.geracao === 13 && this.habilidades[habilidade][alvo] === 3) {
          atual--;
          continue;
        }
        this.habilidades[habilidade][alvo]++;
      }
    });
  }
}
