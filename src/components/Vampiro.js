import { rand, shuffle } from "./Randomizer";

export function gerador(form) {
  const vampiro = {
    // atributos: [7, 5, 3],
    // habilidades: [13, 9, 5],
    // vantagens: { virtudes: 7 },

    nome: "Indigente",
    jogador: "Fulano de Tal",
    cronica: "Era uma vez",
    natureza: "",
    comportamento: "",
    cla: "Caitiff",
    geracao: 13,
    senhor: "Desconhecido",
    conceito: "Indiferente",
    atributos: {
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
    },

    habilidades: {
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
    },
    vantagens: {
      antecedentes: [],
      disciplinas: [],
      virtudes: {
        conscienciaConviccao: 1,
        autoControleInstinto: 1,
        Coragem: 1,
      },
    },
    humanidadeTrilha: 0,
    forcaDeVontade: 0,
    pontosDeSangue: 0,
  };

  let novoVampiro = { ...vampiro, ...form };

  novoVampiro = gerarAtributos(novoVampiro);
  novoVampiro = gerarHabilidades(novoVampiro);
  novoVampiro = gerarVirtudes(novoVampiro);

  novoVampiro.humanidadeTrilha = novoVampiro.vantagens.virtudes.autoControleInstinto + novoVampiro.vantagens.virtudes.conscienciaConviccao;
  novoVampiro.forcaDeVontade = novoVampiro.vantagens.virtudes.Coragem;

  return novoVampiro;
}

function gerarAtributos(vampiro, array = [7, 5, 3]) {
  let pontos = shuffle(array);
  let atributos = shuffle(Object.keys(vampiro.atributos));

  atributos.forEach((atributo, i) => {
    let novoAtr = vampiro.atributos[atributo];
    for (var atual = 0; atual < pontos[i]; atual++) {
      let alvo = Object.keys(novoAtr)[rand(0, 2)];
      if (vampiro.cla === "Nosferatu" && alvo === "aparencia") {
        atual--;
        continue;
      }
      if (vampiro.geracao === 13 && vampiro.atributos[atributo][alvo] === 5) {
        atual--;
        continue;
      }
      vampiro.atributos[atributo][alvo]++;
    }
  });

  if (vampiro.cla === "Nosferatu") vampiro.atributos.sociais.aparencia = 0;

  return vampiro;
}

function gerarHabilidades(vampiro, array = [13, 9, 5]) {
  let pontos = shuffle(array);
  let habilidades = shuffle(Object.keys(vampiro.habilidades));

  habilidades.forEach((habilidade, i) => {
    let novaHab = vampiro.habilidades[habilidade];
    for (var atual = 0; atual < pontos[i]; atual++) {
      let alvo = Object.keys(novaHab)[rand(0, 9)];

      if (
        vampiro.geracao === 13 &&
        vampiro.habilidades[habilidade][alvo] === 3
      ) {
        atual--;
        continue;
      }

      vampiro.habilidades[habilidade][alvo]++;
    }
  });

  return vampiro;
}

function gerarVirtudes(vampiro, pontos = 7) {
  for (var atual = 0; atual < pontos; atual++) {
    let alvo = Object.keys(vampiro.vantagens.virtudes)[rand(0, 2)];

    if (vampiro.geracao === 13 && vampiro.vantagens.virtudes[alvo] === 5) {
      atual--;
      continue;
    }

    vampiro.vantagens.virtudes[alvo]++;
  }

  return vampiro;
}
