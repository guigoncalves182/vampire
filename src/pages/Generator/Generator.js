import Status from "../../components/Status/Status";
import styles from "./Generator.module.scss";
import logo from "./images/VaM_Logo.png";
import { Vampiro } from "../../components/Vampiro";

function Generator() {
  let vampiro = new Vampiro({
    virtudes: {
      conscienciaConviccao:3,
      autoControleInstinto:2,
      Coragem:1
    },
  });

  console.log(vampiro);

  return (
    <div className={styles.ficha}>
      <section className={styles.cabecalho}>
        <img className={styles.logo} src={logo} alt="Vampiro; A máscara." />

        <div className={styles.grid}>
          <div>
            <ul>
              <li>Nome: {vampiro.nome}</li>
              <li>Jogador: {vampiro.jogador}</li>
              <li>Crônica: {vampiro.cronica}</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Natureza: {vampiro.natureza}</li>
              <li>Comportamento: {vampiro.comportamento}</li>
              <li>Clã: {vampiro.cla}</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Geração: {vampiro.geracao}</li>
              <li>Senhor: {vampiro.senhor}</li>
              <li>Conceito: {vampiro.conceito}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.atributos}>
        <h1 className={styles.title}>Atributos</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Físicos</h1>
            <ul>
              <li>
                <Status name="Força" value={vampiro.atributos.fisicos.forca} />
              </li>
              <li>
                <Status
                  name="Destreza"
                  value={vampiro.atributos.fisicos.destreza}
                />
              </li>
              <li>
                <Status name="Vigor" value={vampiro.atributos.fisicos.vigor} />
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.subtitle}>Sociais</h1>
            <ul>
              <li>
                <Status
                  name="Carisma"
                  value={vampiro.atributos.sociais.carisma}
                />
              </li>
              <li>
                <Status
                  name="Manipulação"
                  value={vampiro.atributos.sociais.manipulacao}
                />
              </li>
              <li>
                <Status
                  name="Aparência"
                  value={vampiro.atributos.sociais.aparencia}
                />
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.subtitle}>Mentais</h1>
            <ul>
              <li>
                <Status
                  name="Percepcção"
                  value={vampiro.atributos.mentais.percepcao}
                />
              </li>
              <li>
                <Status
                  name="Inteligência"
                  value={vampiro.atributos.mentais.inteligencia}
                />
              </li>
              <li>
                <Status
                  name="Raciocínio"
                  value={vampiro.atributos.mentais.raciocinio}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.habilidades}>
        <h1 className={styles.title}>Habilidades</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Talentos</h1>
            <ul>
              <li>
                <Status
                  name="Prontidão"
                  value={vampiro.habilidades.talentos.prontidao}
                />
              </li>
              <li>
                <Status
                  name="Esportes"
                  value={vampiro.habilidades.talentos.esportes}
                />
              </li>
              <li>
                <Status
                  name="Briga"
                  value={vampiro.habilidades.talentos.briga}
                />
              </li>
              <li>
                <Status
                  name="Esquiva"
                  value={vampiro.habilidades.talentos.esquiva}
                />
              </li>
              <li>
                <Status
                  name="Empatia"
                  value={vampiro.habilidades.talentos.empatia}
                />
              </li>
              <li>
                <Status
                  name="Expressão"
                  value={vampiro.habilidades.talentos.expressao}
                />
              </li>
              <li>
                <Status
                  name="Intimidação"
                  value={vampiro.habilidades.talentos.intimidacao}
                />
              </li>
              <li>
                <Status
                  name="Liderança"
                  value={vampiro.habilidades.talentos.lideranca}
                />
              </li>
              <li>
                <Status
                  name="Manha"
                  value={vampiro.habilidades.talentos.manha}
                />
              </li>
              <li>
                <Status
                  name="Lábia"
                  value={vampiro.habilidades.talentos.labia}
                />
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.subtitle}>Perícias</h1>
            <ul>
              <li>
                <Status
                  name="Emp. c/ Animais"
                  value={vampiro.habilidades.pericias.empatiaComAnimais}
                />
              </li>
              <li>
                <Status
                  name="Ofícios"
                  value={vampiro.habilidades.pericias.oficios}
                />
              </li>
              <li>
                <Status
                  name="Condução"
                  value={vampiro.habilidades.pericias.conducao}
                />
              </li>
              <li>
                <Status
                  name="Etiqueta"
                  value={vampiro.habilidades.pericias.etiqueta}
                />
              </li>
              <li>
                <Status
                  name="Armas de fogo"
                  value={vampiro.habilidades.pericias.armasDeFogo}
                />
              </li>
              <li>
                <Status
                  name="Armas brancas"
                  value={vampiro.habilidades.pericias.armasBrancas}
                />
              </li>
              <li>
                <Status
                  name="Performance"
                  value={vampiro.habilidades.pericias.performance}
                />
              </li>
              <li>
                <Status
                  name="Segurança"
                  value={vampiro.habilidades.pericias.seguranca}
                />
              </li>
              <li>
                <Status
                  name="Furtividade"
                  value={vampiro.habilidades.pericias.furtividade}
                />
              </li>
              <li>
                <Status
                  name="Sobrevivência"
                  value={vampiro.habilidades.pericias.sobrevivencia}
                />
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.subtitle}>Conhecimentos</h1>
            <ul>
              <li>
                <Status
                  name="Acadêmicos"
                  value={vampiro.habilidades.conhecimentos.academicos}
                />
              </li>
              <li>
                <Status
                  name="Computador"
                  value={vampiro.habilidades.conhecimentos.computador}
                />
              </li>
              <li>
                <Status
                  name="Financas"
                  value={vampiro.habilidades.conhecimentos.financas}
                />
              </li>
              <li>
                <Status
                  name="Investigação"
                  value={vampiro.habilidades.conhecimentos.investigacao}
                />
              </li>
              <li>
                <Status
                  name="Direito"
                  value={vampiro.habilidades.conhecimentos.direito}
                />
              </li>
              <li>
                <Status
                  name="Linguística"
                  value={vampiro.habilidades.conhecimentos.linguistica}
                />
              </li>
              <li>
                <Status
                  name="Medicina"
                  value={vampiro.habilidades.conhecimentos.medicina}
                />
              </li>
              <li>
                <Status
                  name="Ocultismo"
                  value={vampiro.habilidades.conhecimentos.ocultismo}
                />
              </li>
              <li>
                <Status
                  name="Política"
                  value={vampiro.habilidades.conhecimentos.politica}
                />
              </li>
              <li>
                <Status
                  name="Ciências"
                  value={vampiro.habilidades.conhecimentos.ciencia}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.vantagens}>
        <h1 className={styles.title}>Vantagens</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Antecedentes</h1>
            <ul>
              <li>
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
              </li>
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Disciplinas</h1>
            <ul>
              <li>
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
              </li>
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Virtudes</h1>
            <ul>
              <li>
                <Status
                  name="Consciência / Convicção"
                  value={vampiro.vantagens.virtudes.conscienciaConviccao}
                />
                <Status
                  name="Auto-Controle / Instinto"
                  value={vampiro.vantagens.virtudes.autoControleInstinto}
                />
                <Status
                  name="Coragem"
                  value={vampiro.vantagens.virtudes.Coragem}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className={styles.outros}>
        <h1 className={styles.title}>Outros</h1>
      </section> */}
    </div>
  );
}

export default Generator;
