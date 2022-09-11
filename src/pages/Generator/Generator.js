import Vampiro from "../../components/Vampiro";
import Ficha from "../../components/Ficha/Ficha";
import { useState } from "react";

export default function Generator() {
  const [vampiro, setVampiro] = useState();
  const [form, setForm] = useState();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setVampiro(new Vampiro(form));
        }}
      >
        <input
          placeholder="Nome"
          onChange={(e) => {
            setForm({ ...form, nome: e.target.value });
          }}
        />

        <input
          placeholder="Jogador"
          onChange={(e) => {
            setForm({ ...form, jogador: e.target.value });
          }}
        />

        <input
          placeholder="Crônica"
          onChange={(e) => {
            setForm({ ...form, cronica: e.target.value });
          }}
        />

        <input
          placeholder="Natureza"
          onChange={(e) => {
            setForm({ ...form, natureza: e.target.value });
          }}
        />

        <input
          placeholder="Comportamento"
          onChange={(e) => {
            setForm({ ...form, comportamento: e.target.value });
          }}
        />

        <select
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
        </select>

        <input
          placeholder="Geração"
          type="number"
          min="8"
          max="14"
          onChange={(e) => {
            setForm({ ...form, geracao: e.target.value });
          }}
        />

        <input
          placeholder="Senhor"
          onChange={(e) => {
            setForm({ ...form, senhor: e.target.value });
          }}
        />

        <input
          placeholder="Conceito"
          onChange={(e) => {
            setForm({ ...form, conceito: e.target.value });
          }}
        />

        <button type="submit">Gerar</button>

        {vampiro && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setVampiro();
            }}
          >
            Limpar
          </button>
        )}
      </form>

      <hr />

      {/* <Ficha vampiro={vampiro} /> */}
      {vampiro && <Ficha vampiro={vampiro} />}
    </>
  );
}
