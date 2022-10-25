// import styles from "./Home.module.scss";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Ficha from "../../components/Ficha/Ficha";

function Home() {
  const [vampiro, setVampiro] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  async function getVampiro(id) {
    await fetch(process.env.REACT_APP_API_URL + "vampiro/" + id)
      .then((response) => response.json())
      .then((result) => {
        setVampiro(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getVampiro(id)
  }, [id]);

  if (loading) return "Carregando";
  if (Object.keys(vampiro).length === 0) return <Navigate to="/" />
  return <Ficha vampiro={vampiro} />;
}

export default Home;
