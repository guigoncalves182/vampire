import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import styles from "../pages/Generator/Generator.module.scss";
import { gerador } from "./Vampiro";

export default function Formulario({ form, setForm, vampiro, setVampiro }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setVampiro(gerador(form));
      }}
    >
      <Row>
        <Col md>
          <Form.Control
            className={styles.input}
            placeholder="Nome"
            onChange={(e) => {
              setForm({ ...form, nome: e.target.value });
            }}
          />
          <Form.Control
            className={styles.input}
            placeholder="Jogador"
            onChange={(e) => {
              setForm({ ...form, jogador: e.target.value });
            }}
          />
          <Form.Control
            className={styles.input}
            placeholder="Crônica"
            onChange={(e) => {
              setForm({ ...form, cronica: e.target.value });
            }}
          />
        </Col>
        <Col md>
          <Form.Control
            className={styles.input}
            placeholder="Natureza"
            onChange={(e) => {
              setForm({ ...form, natureza: e.target.value });
            }}
          />
          <Form.Control
            className={styles.input}
            placeholder="Comportamento"
            onChange={(e) => {
              setForm({ ...form, comportamento: e.target.value });
            }}
          />
          <Form.Select
            className={styles.input}
            onChange={(e) => {
              setForm({ ...form, cla: e.target.value });
            }}
          >
            <option hidden>Clã</option>
            <option value="Assamitas">Assamitas</option>
            <option value="Brujah">Brujah</option>
            <option value="Seguidores de Set">Seguidores de Set</option>
            <option value="Gangrel">Gangrel</option>
            <option value="Giovanni">Giovanni</option>
            <option value="Lasombra">Lasombra</option>
            <option value="Malkavianos">Malkavianos</option>
            <option value="Nosferatu">Nosferatu</option>
            <option value="Ravnos">Ravnos</option>
            <option value="Toreador">Toreador</option>
            <option value="Tremere">Tremere</option>
            <option value="Tzimisce">Tzimisce</option>
            <option value="Ventrue">Ventrue</option>
            <option>Caitiff</option>
          </Form.Select>
        </Col>
        <Col md>
          <Form.Control
            className={styles.input}
            placeholder="Geração"
            type="number"
            min="8"
            max="14"
            onChange={(e) => {
              setForm({ ...form, geracao: e.target.value });
            }}
          />
          <Form.Control
            className={styles.input}
            placeholder="Senhor"
            onChange={(e) => {
              setForm({ ...form, senhor: e.target.value });
            }}
          />
          <Form.Control
            className={styles.input}
            placeholder="Conceito"
            onChange={(e) => {
              setForm({ ...form, conceito: e.target.value });
            }}
          />
        </Col>
      </Row>
      <Stack gap={3}>
        <Button type="submit" variant="dark" className={styles.button}>
          Gerar
        </Button>
        {vampiro && (
          <Button
            className={styles.button}
            variant="outline-dark"
            onClick={(e) => {
              e.preventDefault();
              setVampiro();
            }}
          >
            Limpar
          </Button>
        )}
      </Stack>
    </Form>
  );
}
