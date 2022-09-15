import Ficha from "../../components/Ficha/Ficha";
import Formulario from "../../components/Formulario";
import styles from "./Generator.module.scss";
import { useState } from "react";
import Container from "react-bootstrap/Container";

export default function Generator() {
  const [vampiro, setVampiro] = useState();
  const [form, setForm] = useState();

  return (
    <Container className={styles.container}>
      <Formulario
        form={form}
        setForm={setForm}
        vampiro={vampiro}
        setVampiro={setVampiro}
      />

      <hr />

      {vampiro && <Ficha vampiro={vampiro} />}
    </Container>
  );
}
