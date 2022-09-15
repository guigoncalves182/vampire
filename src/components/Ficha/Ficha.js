import styles from "./Ficha.module.scss";
import Status from "../Status/Status";
import Vitalidade from "../Vitalidade/Vitalidade";
import logo from "./images/VaM_Logo.png";

// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from "react-bootstrap/Popover";

// function popover(title, desc = "Descrição") {
//   return (
//     <Popover>
//       {title && <Popover.Header as="h3">{title}</Popover.Header>}
//       <Popover.Body>{desc}</Popover.Body>
//     </Popover>
//   );
// }

export default function Ficha({ vampiro }) {
  let size = 5;
  if (vampiro?.geracao < 13) size = 7;

  return (
    <div className={styles.ficha}>
      <section className={`${styles.cabecalho} ${styles.section}`}>
        <img className={styles.logo} src={logo} alt="Vampiro; A máscara." />

        <div className={styles.grid}>
          <div>
            <ul>
              <li>Nome: {vampiro?.nome}</li>
              <li>Jogador: {vampiro?.jogador}</li>
              <li>Crônica: {vampiro?.cronica}</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Natureza: {vampiro?.natureza}</li>
              <li>Comportamento: {vampiro?.comportamento}</li>
              <li>Clã: {vampiro?.cla}</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Geração: {vampiro?.geracao}</li>
              <li>Senhor: {vampiro?.senhor}</li>
              <li>Conceito: {vampiro?.conceito}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.atributos} ${styles.section}`}>
        <h1 className={styles.title}>Atributos</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Físicos</h1>
            <ul>
              <li>
                <Status
                  name="Força"
                  value={vampiro?.atributos.fisicos.forca}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Destreza"
                  value={vampiro?.atributos.fisicos.destreza}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Vigor"
                  value={vampiro?.atributos.fisicos.vigor}
                  size={size}
                />
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.subtitle}>Sociais</h1>
            <ul>
              <li>
                <Status
                  name="Carisma"
                  value={vampiro?.atributos.sociais.carisma}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Manipulação"
                  value={vampiro?.atributos.sociais.manipulacao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Aparência"
                  value={vampiro?.atributos.sociais.aparencia}
                  size={size}
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
                  value={vampiro?.atributos.mentais.percepcao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Inteligência"
                  value={vampiro?.atributos.mentais.inteligencia}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Raciocínio"
                  value={vampiro?.atributos.mentais.raciocinio}
                  size={size}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.habilidades} ${styles.section}`}>
        <h1 className={styles.title}>Habilidades</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Talentos</h1>
            <ul>
              <li>
                <Status
                  name="Prontidão"
                  value={vampiro?.habilidades.talentos.prontidao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Esportes"
                  value={vampiro?.habilidades.talentos.esportes}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Briga"
                  value={vampiro?.habilidades.talentos.briga}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Esquiva"
                  value={vampiro?.habilidades.talentos.esquiva}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Empatia"
                  value={vampiro?.habilidades.talentos.empatia}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Expressão"
                  value={vampiro?.habilidades.talentos.expressao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Intimidação"
                  value={vampiro?.habilidades.talentos.intimidacao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Liderança"
                  value={vampiro?.habilidades.talentos.lideranca}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Manha"
                  value={vampiro?.habilidades.talentos.manha}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Lábia"
                  value={vampiro?.habilidades.talentos.labia}
                  size={size}
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
                  value={vampiro?.habilidades.pericias.empatiaComAnimais}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Ofícios"
                  value={vampiro?.habilidades.pericias.oficios}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Condução"
                  value={vampiro?.habilidades.pericias.conducao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Etiqueta"
                  value={vampiro?.habilidades.pericias.etiqueta}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Armas de fogo"
                  value={vampiro?.habilidades.pericias.armasDeFogo}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Armas brancas"
                  value={vampiro?.habilidades.pericias.armasBrancas}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Performance"
                  value={vampiro?.habilidades.pericias.performance}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Segurança"
                  value={vampiro?.habilidades.pericias.seguranca}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Furtividade"
                  value={vampiro?.habilidades.pericias.furtividade}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Sobrevivência"
                  value={vampiro?.habilidades.pericias.sobrevivencia}
                  size={size}
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
                  value={vampiro?.habilidades.conhecimentos.academicos}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Computador"
                  value={vampiro?.habilidades.conhecimentos.computador}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Financas"
                  value={vampiro?.habilidades.conhecimentos.financas}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Investigação"
                  value={vampiro?.habilidades.conhecimentos.investigacao}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Direito"
                  value={vampiro?.habilidades.conhecimentos.direito}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Linguística"
                  value={vampiro?.habilidades.conhecimentos.linguistica}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Medicina"
                  value={vampiro?.habilidades.conhecimentos.medicina}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Ocultismo"
                  value={vampiro?.habilidades.conhecimentos.ocultismo}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Política"
                  value={vampiro?.habilidades.conhecimentos.politica}
                  size={size}
                />
              </li>
              <li>
                <Status
                  name="Ciências"
                  value={vampiro?.habilidades.conhecimentos.ciencia}
                  size={size}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.vantagens} ${styles.section}`}>
        <h1 className={styles.title}>Vantagens</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Antecedentes</h1>
            <ul>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
              <li>
                <Status />
              </li>
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Disciplinas</h1>
            <ul>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
              <li>
                <Status size={size} />
              </li>
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Virtudes</h1>
            <ul>
              <li>
                <Status
                  name="Consciência / Convicção"
                  value={vampiro?.vantagens.virtudes.conscienciaConviccao}
                />
              </li>
              <li>
                <Status
                  name="Auto-Controle / Instinto"
                  value={vampiro?.vantagens.virtudes.autoControleInstinto}
                />
              </li>
              <li>
                <Status
                  name="Coragem"
                  value={vampiro?.vantagens.virtudes.Coragem}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.outros} ${styles.section}`}>
        <h1 className={styles.title}>Outros</h1>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.subtitle}>Qualidades/Defeitos</h1>
            <ul>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
              <li>
                <Status size="0" />
              </li>
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Humanidade/Trilha</h1>
            <ul>
              <li>
                <Status full size="10" value={vampiro?.humanidadeTrilha} />
              </li>
            </ul>

            <h1 className={styles.subtitle}>Força de vontade</h1>
            <ul>
              <li>
                <Status full value={vampiro?.forcaDeVontade} size="10" />
              </li>
              <li>
                <Status full value={vampiro?.forcaDeVontade} square size="10" />
              </li>
            </ul>

            <h1 className={styles.subtitle}>Pontos de Sangue</h1>
            <ul>
              <li>
                <Status full value={10} square size="10" />
              </li>
              {vampiro?.geracao < 13 && (
                <li>
                  <Status full square size="10" />
                </li>
              )}
            </ul>
          </div>

          <div>
            <h1 className={styles.subtitle}>Vitalidade</h1>
            <ul>
              <li>
                <Vitalidade name="Escoriado" penalty="0" />
              </li>
              <li>
                <Vitalidade name="Machucado" penalty="-1" />
              </li>
              <li>
                <Vitalidade name="Ferido" penalty="-1" />
              </li>
              <li>
                <Vitalidade name="Ferido gravemente" penalty="-2" />
              </li>
              <li>
                <Vitalidade name="Espancado" penalty="-2" />
              </li>
              <li>
                <Vitalidade name="Aleijado" penalty="-5" />
              </li>
              <li>
                <Vitalidade name="Incapacitado" />
              </li>
            </ul>

            <h1 className={styles.subtitle}>Experiência</h1>
            <h1>&nbsp;</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
